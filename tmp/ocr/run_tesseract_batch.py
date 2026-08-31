from __future__ import annotations

import csv
import io
import json
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


ROOT = Path("/Users/maolihang/Documents/my/blog-notes")
ASSETS = ROOT / "docs/python/web-scraping/assets"
OUTPUT = ROOT / "tmp/ocr/results"
TESSDATA = Path("/private/tmp/codex-tessdata")


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


def recognize(image: Path) -> tuple[Path, int]:
    relative = image.relative_to(ASSETS)
    target = OUTPUT / relative.with_suffix(".json")
    target.parent.mkdir(parents=True, exist_ok=True)
    command = [
        "tesseract",
        str(image),
        "stdout",
        "--tessdata-dir",
        str(TESSDATA),
        "-l",
        "chi_sim+eng",
        "--psm",
        "6",
        "-c",
        "preserve_interword_spaces=1",
        "tsv",
    ]
    completed = subprocess.run(command, check=True, capture_output=True, text=True)
    reader = csv.DictReader(io.StringIO(completed.stdout), delimiter="\t")
    grouped: dict[tuple[str, str, str], list[dict]] = {}
    for row in reader:
        if row.get("level") != "5" or not row.get("text", "").strip():
            continue
        key = (row["block_num"], row["par_num"], row["line_num"])
        grouped.setdefault(key, []).append(row)

    lines = []
    for rows in grouped.values():
        rows.sort(key=lambda row: int(row["left"]))
        left = min(int(row["left"]) for row in rows)
        top = min(int(row["top"]) for row in rows)
        right = max(int(row["left"]) + int(row["width"]) for row in rows)
        bottom = max(int(row["top"]) + int(row["height"]) for row in rows)
        confidences = [float(row["conf"]) for row in rows if float(row["conf"]) >= 0]
        lines.append(
            {
                "text": join_words([row["text"] for row in rows]),
                "left": left,
                "top": top,
                "right": right,
                "bottom": bottom,
                "height": bottom - top,
                "confidence": sum(confidences) / len(confidences) if confidences else 0,
                "words": [
                    {
                        "text": row["text"],
                        "left": int(row["left"]),
                        "top": int(row["top"]),
                        "width": int(row["width"]),
                        "height": int(row["height"]),
                        "confidence": float(row["conf"]),
                    }
                    for row in rows
                ],
            }
        )
    lines.sort(key=lambda line: (line["top"], line["left"]))
    target.write_text(
        json.dumps({"image": str(image), "lines": lines}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return relative, len(lines)


def main() -> None:
    images = sorted(ASSETS.rglob("*.png"))
    print(f"pages={len(images)}", flush=True)
    completed_count = 0
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(recognize, image): image for image in images}
        for future in as_completed(futures):
            relative, lines = future.result()
            completed_count += 1
            print(f"[{completed_count}/{len(images)}] {relative} lines={lines}", flush=True)


if __name__ == "__main__":
    main()
