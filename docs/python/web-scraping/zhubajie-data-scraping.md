# 抓取猪八戒数据

## xpath 练习: 抓取和猪八戒效据

二猪八戒.

```python
import requests
from Lxml import etree
```

```python
headers = {
```

}

```python
resp = requests.get(urL, headers=headers)
```

```python
# B4etree, +mELementwR
tree = etree.HTMLCresp. text)
# 拿数据吧
```

```python
els = tree.xpathC("//div[@cLass='witkey-list-grid
j-service-provider-wrap ']/*/div[@class='witkey-
```

item grid-box']")

```python
for div in els:
    name = div.xpath("./div/div[@class='grid-top-
```

right']/section/h4/a/textQ)")[@]

```python
intro = div.xpath("./div/div[@class='grid-
```

[0]

```python
shopdesc =
```

```python
shopdesc' |//text(Q)")).replaceC"\n",)
```

```python
    firstline =
div.xpathC("./div/div[@cLass='grid-top-
```

shopdesc-firstLine']//textQ)")

```python
if firstline:
```

shopdesc +=

```python
fav =
```

```python
right']/section/h4/div/div[@cLass='expert-
```

tree']//textQ)")).replaceC"\n",)

```python
SS. ire ae = |，
```

![抓取猪八戒数据 - 第3页](assets/zhubajie-data-scraping/page-3.png)
