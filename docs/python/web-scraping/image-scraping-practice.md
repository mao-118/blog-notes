# 抓取让你睡不着觉的图片

### 一一 N、

### 案例 - 抓取让你睡不看竞的

### aR

### 我们以优美图库作为本节课的案例, 具体你能用它来做什么. 还是的看

### 你自己了 ~

### 为了视频和文档能够正常投放在市面上, 本课程抓取的图片都是唯美

### 桌面系, 该网站还有很多让你难以入眠的优秀图片资源, 各位. 看着办

吧

```python
https://www.umei.cc/bizhitupian/weimeibizhi/
```

```python
Nea La ay =
```

![抓取让你睡不着觉的图片 - 第1页](assets/image-scraping-practice/page-1.png)

## 注意我选中的这个区域, 我们想要的图片就在这里. 但是, 绝对不是现

### 在你看到的样子. 为什么呢? 不够高清大图 ~

### 真正的高清大图在子页面中, 比如, 我点击第一个图片

### 一 -一二一

这才是我想要的大图 ~

也就是说, 我需要在网站的首页中, 找到子页面的链接, 然后请求到子

页面, 才能看到这张大图 ~ 不明白的, 把上面的内容重新梳理一

也就是说, 想要下载该网站图片 (高清大图), 需要三步，

第一步, 在主页面中拿到每一个图片的子页面链接

第二步, 在子页面中找到真正的图片下载地址

![抓取让你睡不着觉的图片 - 第2页](assets/image-scraping-practice/page-2.png)

## 第三步, 下载图片

### 一个一个干!

1. 拿到子页面链接

```python
def main_page():
    with open("child_page_href.txt", mode="w") as
```

f:

```python
        for i in range(1, 56):
           try:
               resp =
requests.get(f"https://ww.umei.cc/bizhitupian/we
```

imeibizhi/{i}.htm")

```python
               # <meta http-equiv="Content-Type"
content="text/htmL; charset=utf-8" />
               resp.encoding = 'utf-8' # 处理中
```

文乱码， 这里要和页面上的 charset 对应

```python
               main_page =
BeautifulSoupCresp.text, "html.parser")
               typeListDiv =
main_page.find("div", attrs={"class":
```

TypeList})

```python
main_a_list =
```

```python
for main_a in main_a_list:
    href = main_a.get("href") #
```

### 拿到某一个标签中 XXX 属性的值

f.writeChref)

f.writeC"\n")

```python
    time.sleep(@.5)
except:
```

zhi/{i}.htm, Wes")

```python
print(resp.text)
break # 也可以记录下来， 供以后查错用
```

2. 获取到子页面信息, 找到下载图片的图片路径

```python
def child_page():
    with open("child_page_href.txt", mode="r") as
```

f:

```python
for line in f:
    Line = Line.stripQ
    resp = requests.get(Line)
```

```python
resp.encoding='utf-8'
child = BeautifulSoupCresp.text,
```

```python
           div = child.find("div",
class_="ImageBody")
            img = div.find("img")
            if img:
               src = img.get('src")
```

printCsrc)

```python
else:
```

### printCLine，" 没有图片 ")

### 3. 下载图片

```python
def download_img(src):
    with open("img/"+src.split("/")[-1],
mode="wb") as f:
        resp = requests.get(src) # 下载图片
        f.write(resp.content) # 图片写入文件
```

printCsrc, "down!)

最后运行一下, 看看结果

对了一定记着把 img 文件夹设置为 excluded, 否则你的 PyCharm 会奇

卡无比

```python
@ 0a193 1b4ef3e919057a3alfab5b5e048.jpg
```

1eae9154276b3b2a32585c19929fb9ca.jpg

前 1fddf089296691e8de48a44239fd8b97.jpg

2d10316217895a231a47bb8813606adc.jpg

2e5fcd75f779b0161be8439be3b6a25d.jpg

3ed27e5aedc2673755bf3327e9dcc13b.jpg

3f192ba918c0012185b4d1331f112aae.jpg

```python
@ 4b35aeefeb9cf1 8f3f3d7aeb3a0490ee.jpg
```

前 4d50f6b96cc7082224f03772d3530b20.jpg

5fa613a6911d1d83374fa129a030c956.jpg

6b72c57a1423c866d2b9dc10d0473f27.jpg

出 6bd6b66b1da02c911b134670ee8f7b38.jpg

```python
@ 6c6deeb20a2b06d0d1e5 1da47d167edc.jpg
```

前 6c3854c9bf68d1009ea714453d8798dc.jpg

6cffcbaecc7d9103289a00b7ab5 beef3.jpg

```python
@ 6d964b8d3cc2e47fee6a92415 38a65 1b.jpg
```

前 7f6177e9a3c56cb5 10bab6906d18465b.jpg

向 Ochffd0a245a72775a15e5 2cfa261173.ina

![抓取让你睡不着觉的图片 - 第6页](assets/image-scraping-practice/page-6.png)
