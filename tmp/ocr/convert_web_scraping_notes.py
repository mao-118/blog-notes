from __future__ import annotations

import json
import re
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path("/Users/maolihang/Documents/my/blog-notes")
DOCS = ROOT / "docs/python/web-scraping"
ASSETS = DOCS / "assets"
OCR = ROOT / "tmp/ocr/results"


CODE_MARKER = re.compile(
    r"(?:^\s*(?:#|@|import\b|from\b|def\b|async\s+def\b|class\b|if\b|elif\b|else\s*:|"
    r"for\b|while\b|with\b|return\b|yield\b|await\b|try\s*:|except\b|finally\s*:|raise\b|"
    r"pass\b|break\b|continue\b|var\b|const\b|let\b)|"
    r"https?\s*:\s*/\s*/|</?[A-Za-z][^>]*>|(?:requests|BeautifulSoup|aiohttp|asyncio|selenium|"
    r"webdriver|ThreadPoolExecutor|ProcessPoolExecutor|re)\s*[.(]|\w+\s*=|\w+\([^)]*\)|"
    r"\.\s*(?:get|post|find|find_all|xpath|text|content|json|write|read|submit|result)\b)"
)


def natural_key(path: Path) -> tuple:
    return tuple(int(part) if part.isdigit() else part for part in re.split(r"(\d+)", path.name))


def join_words(words: list[str]) -> str:
    text = ""
    for word in words:
        word = word.strip()
        if not word:
            continue
        if not text:
            text = word
            continue
        previous = text[-1]
        current = word[0]
        cjk_pair = "\u3400" <= previous <= "\u9fff" and "\u3400" <= current <= "\u9fff"
        punctuation = current in "，。！？；：、,.!?;:)]}>" or previous in "([{<"
        text += ("" if cjk_pair or punctuation else " ") + word
    return text


def strip_line_number(line: dict) -> tuple[str, int]:
    words = line.get("words", [])
    if words and re.fullmatch(r"\d+", words[0]["text"].strip()):
        return join_words([word["text"] for word in words[1:]]), words[1]["left"] if len(words) > 1 else line["left"]
    text = line["text"].strip()
    match = re.match(r"^\d+\s+(?=[#@A-Za-z_<>{}\[\]])", text)
    if match:
        return text[match.end() :], line["left"] + 45
    return text, line["left"]


def clean_common(text: str) -> str:
    text = text.replace("\t", " ").replace("\r", " ").replace("\n", " ")
    text = text.replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
    text = text.replace("（", "(").replace("）", ")")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(?<=[\u3400-\u9fff])\s+(?=[\u3400-\u9fff])", "", text)
    text = re.sub(r"\bur1\b", "url", text, flags=re.I)
    text = re.sub(r"\brequsts\b", "requests", text, flags=re.I)
    text = re.sub(r"\bpycharm\b", "PyCharm", text, flags=re.I)
    return text


def fix_code(text: str) -> str:
    text = clean_common(text)
    functions = (
        "input|print|open|write|read|get|post|find|find_all|xpath|wait|create_task|run|submit|"
        "range|len|str|int|dict|list|set|tuple|loads|dumps|compile|search|match|split|join|"
        "decode|encode|sleep|ClientSession|Thread|Process|ThreadPoolExecutor|ProcessPoolExecutor"
    )
    text = re.sub(rf"\b({functions})C(?=[\"'A-Za-z0-9_])", r"\1(", text)
    text = re.sub(r"\b([A-Za-z_][\w]*)\s+\.\s+([A-Za-z_][\w]*)", r"\1.\2", text)
    text = re.sub(r"https?\s*:\s*/\s*/", lambda match: "https://" if match.group(0).lower().startswith("https") else "http://", text)
    text = re.sub(r"(?<=\w)\s*\.\s*(?=(?:com|cn|org|net)\b)", ".", text, flags=re.I)
    text = re.sub(r"\b([A-Za-z_][\w.]*)QO\b", r"\1()", text)
    text = text.replace("Cresponse", "(response").replace("Ccontent", "(content")
    return text


def clean_prose(text: str) -> str:
    text = clean_common(text)
    text = re.sub(r"^(?:IRAE\s+RFID|es|RFID|IRAE)$", "", text, flags=re.I)
    text = re.sub(r"^(?:=|ma|mi|国|口)\s+(?=[A-Za-z\u3400-\u9fff])", "- ", text)
    return text


def ascii_ratio(text: str) -> float:
    visible = [char for char in text if not char.isspace()]
    if not visible:
        return 0
    return sum(ord(char) < 128 for char in visible) / len(visible)


def is_code_line(text: str, raw_text: str) -> bool:
    if not text:
        return False
    numbered = bool(re.match(r"^\d+\s+(?=[#@A-Za-z_<>{}\[\]])", raw_text.strip()))
    marker = bool(CODE_MARKER.search(text))
    return marker and (ascii_ratio(text) >= 0.38 or numbered or text.startswith("#"))


def foreground_ratio(image_path: Path) -> float:
    image = np.asarray(Image.open(image_path).convert("RGB").resize((100, 140)), dtype=float)
    borders = np.concatenate(
        [image[:5].reshape(-1, 3), image[-5:].reshape(-1, 3), image[:, :5].reshape(-1, 3), image[:, -5:].reshape(-1, 3)]
    )
    background = np.median(borders, axis=0)
    distance = np.linalg.norm(image - background, axis=2)
    return float((distance > 25).mean())


def code_language(code: str) -> str:
    if re.search(r"</?(?:html|div|script|body|head|link|iframe)\b", code, re.I):
        return "html"
    if re.search(r"\b(?:var|let|const)\s+\w+\s*=", code) and "def " not in code:
        return "javascript"
    return "python"


def render_page(image_path: Path, data: dict, title: str, page_number: int, seen_text: set[str]) -> list[str]:
    prepared = []
    for raw in data.get("lines", []):
        if "\t" in raw.get("text", "") or re.match(r"^\d+\s+\d+\s+\d+\s+\d+", raw.get("text", "")):
            continue
        text_without_number, effective_left = strip_line_number(raw)
        common = clean_common(text_without_number)
        code = is_code_line(common, raw.get("text", ""))
        text = fix_code(text_without_number) if code else clean_prose(text_without_number)
        if not text:
            continue
        if raw.get("confidence", 0) < (32 if code else 48):
            continue
        prepared.append({**raw, "text": text, "code": code, "effective_left": effective_left})

    reliable = [line for line in prepared if line["confidence"] >= 60]
    average_confidence = sum(line["confidence"] for line in prepared) / len(prepared) if prepared else 0
    visual_ratio = foreground_ratio(image_path)
    fallback = len(reliable) <= 2 or average_confidence < 68 or visual_ratio > 0.26 or len(prepared) > 38

    output: list[str] = []
    first_prose = next((line for line in prepared if not line["code"]), None)
    if first_prose and first_prose["top"] < 600 and first_prose["height"] >= 55 and len(first_prose["text"]) <= 55:
        heading = re.sub(r"^[一二三四五六七八九十\d]+[、.\s]+", "", first_prose["text"]).strip()
        if heading and heading != title and heading not in seen_text:
            output.append(f"## {heading}")
            seen_text.add(heading)
        first_prose["skip"] = True

    index = 0
    while index < len(prepared):
        line = prepared[index]
        if line.get("skip"):
            index += 1
            continue
        if line["code"]:
            block = [line]
            cursor = index + 1
            while cursor < len(prepared):
                next_line = prepared[cursor]
                gap = next_line["top"] - block[-1]["bottom"]
                if next_line["code"] and gap <= 95:
                    block.append(next_line)
                    cursor += 1
                else:
                    break
            min_left = min(item["effective_left"] for item in block)
            code_lines = []
            for item in block:
                indent = max(0, min(16, round((item["effective_left"] - min_left) / 25)))
                code_lines.append(" " * indent + item["text"])
            code = "\n".join(code_lines)
            output.append(f"```{code_language(code)}\n{code}\n```")
            index = cursor
            continue

        text = line["text"]
        if len(text) >= 28:
            if text in seen_text:
                index += 1
                continue
            seen_text.add(text)
        if text.startswith("- "):
            output.append(text)
        elif line["height"] >= 50 and len(text) <= 42 and line["top"] < 1100:
            output.append(f"### {text}")
        else:
            output.append(text)
        index += 1

    if fallback:
        relative = image_path.relative_to(DOCS).as_posix()
        output.append(f"![{title} - 第{page_number}页]({relative})")
    return output


def convert_document(slug: str) -> tuple[int, int, int]:
    markdown = DOCS / f"{slug}.md"
    original = markdown.read_text(encoding="utf-8")
    match = re.search(r"^#\s+(.+)$", original, re.M)
    title = match.group(1).strip() if match else slug
    images = sorted((ASSETS / slug).glob("*.png"), key=natural_key)
    lines = [f"# {title}", ""]
    seen_text: set[str] = set()
    fallback_count = 0
    code_blocks = 0
    for page_number, image_path in enumerate(images, 1):
        data_path = OCR / slug / image_path.with_suffix(".json").name
        data = json.loads(data_path.read_text(encoding="utf-8"))
        page_lines = render_page(image_path, data, title, page_number, seen_text)
        fallback_count += sum(1 for line in page_lines if line.startswith("!["))
        code_blocks += sum(1 for line in page_lines if line.startswith("```"))
        lines.extend(page_lines)
        lines.append("")
    text = "\n\n".join(line for line in lines if line != "")
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    markdown.write_text(text, encoding="utf-8")
    return len(images), fallback_count, code_blocks


def main() -> None:
    totals = [0, 0, 0]
    for directory in sorted(path for path in ASSETS.iterdir() if path.is_dir()):
        slug = directory.name
        if not (DOCS / f"{slug}.md").exists():
            continue
        pages, fallback, code_blocks = convert_document(slug)
        totals[0] += pages
        totals[1] += fallback
        totals[2] += code_blocks
        print(f"{slug}: pages={pages} fallback_images={fallback} code_blocks={code_blocks}")
    print(f"total: pages={totals[0]} fallback_images={totals[1]} code_blocks={totals[2]}")


if __name__ == "__main__":
    main()
