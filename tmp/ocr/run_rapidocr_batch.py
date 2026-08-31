from __future__ import annotations

import json
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
ASSETS = ROOT / "docs/python/web-scraping/assets"
OUTPUT = ROOT / "tmp/ocr/rapid-results"


def recognize(path_string: str) -> tuple[str, int]:
    from rapidocr_onnxruntime import RapidOCR

    path = Path(path_string)
    engine = RapidOCR()
    result, _ = engine(str(path))
    rows = []
    for box, text, score in result or []:
        rows.append({"box": box, "text": text, "score": score})

    destination = OUTPUT / path.parent.name / f"{path.stem}.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(rows, ensure_ascii=False), encoding="utf-8")
    return str(path.relative_to(ASSETS)), len(rows)


def main() -> None:
    images = sorted(ASSETS.glob("*/*.png"))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    completed = 0
    with ProcessPoolExecutor(max_workers=4) as pool:
        futures = [pool.submit(recognize, str(path)) for path in images]
        for future in as_completed(futures):
            relative, count = future.result()
            completed += 1
            print(f"[{completed:03d}/{len(images)}] {relative}: {count} items", flush=True)


if __name__ == "__main__":
    main()
