import AppKit
import Foundation
import Vision

struct OCRLine: Codable {
    let text: String
    let confidence: Float
    let x: Double
    let y: Double
    let width: Double
    let height: Double
}

struct OCRPage: Codable {
    let image: String
    let width: Int
    let height: Int
    let lines: [OCRLine]
}

guard CommandLine.arguments.count == 3 else {
    fputs("usage: recognize <image> <output-json>\n", stderr)
    exit(2)
}

let imagePath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]
let imageURL = URL(fileURLWithPath: imagePath)

guard
    let image = NSImage(contentsOf: imageURL),
    let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
    fputs("unable to read image: \(imagePath)\n", stderr)
    exit(3)
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.recognitionLanguages = ["zh-Hans", "en-US"]
request.usesLanguageCorrection = false
request.minimumTextHeight = 0.006
request.customWords = [
    "requests", "BeautifulSoup", "aiohttp", "asyncio", "selenium",
    "xpath", "lxml", "response", "headers", "cookies", "proxies",
    "ThreadPoolExecutor", "ProcessPoolExecutor", "coroutine", "yield",
    "PyCharm", "Python", "iframe", "webdriver", "m3u8"
]

let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
do {
    try handler.perform([request])
} catch {
    fputs("OCR failed: \(error)\n", stderr)
    exit(4)
}

let observations = request.results ?? []
let lines: [OCRLine] = observations.compactMap { observation in
    guard let candidate = observation.topCandidates(1).first else { return nil }
    let box = observation.boundingBox
    return OCRLine(
        text: candidate.string,
        confidence: candidate.confidence,
        x: box.origin.x,
        y: box.origin.y,
        width: box.width,
        height: box.height
    )
}

let page = OCRPage(
    image: imagePath,
    width: cgImage.width,
    height: cgImage.height,
    lines: lines
)
let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
let data = try encoder.encode(page)
try data.write(to: URL(fileURLWithPath: outputPath), options: .atomic)
