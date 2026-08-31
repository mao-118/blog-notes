# 抓取北京新发地菜价

## — -一 N ae IN

### 抓取北京新有地某价

```python
from concurrent.futures import ThreadPoolExecutor
import csv
import requests
from LxmL import etree
```

```python
  # 干掉新发地
  def downloadC(url):
| resp = requests.get(urlL)
      html = etree.HTMLCresp. text)
      table =
```

html.xpathC"/htmlL/body/div[2]/div[4]/div[1]/table

```python
for tr in trs:
    tr_text = tr.xpath("./td/child::textQ")
    tr_text = Citem.replaceC"\\",
```

).replaceC/",) for item in tr_text)

```python
    csv_writer.writerow(tr_text)
return url
```

```python
if __name__ == '__main__':
    csv_writer = csv.writer(open("2//).csv",
mode="w"))
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 100): # 别弄太狠. 不好
            url_temp =
```

```python
t.submit(fn=download, url=url_temp)
```

printC"all down!")
