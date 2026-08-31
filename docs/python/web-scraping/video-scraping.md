# 抓取让你睡不着觉的视频

## aA} 4

LE

### 首先, 我们先从一个简单的案例入手.

### 我们想要抓取网上的视频资源就必须要了解我们的视频网站是如何

### 工作的. 这里我用 91 看剧来做举例. 其他网站的原理是一样的.

### 视频网站是如何工作的

假设, 你现在想要做一个视频网站. 也有很多的 UP 猪帮你上传视频.

OK, 作为服务器作者的你. 只需要把视频保存起来. 然后给出一个视

频的链接即可. 然后在你的 HTML 代码中通过 video 标签引入即可.

2021/3/3 下午 4:34 704.7MB "Monosnap vide|

- NE TOTS FF 7:35 192.3MB Monosnap vide}

CEE 2021/3/2 FF 5:52 169.4MB — Monosnap vide|

- aa aE mp4 2021/3/2 FF 5:43 4.82GB "Monosnap vide|

- anata aU 信息.mp4 2021/2/26 下午 4:19 2.57GB "Monosnap vide|

- teat One 2021/2/25 BF 7:23 959.7MB — Monosnap vide}

- eect mine 价.mp4 m 2021/2/24 FF 7:24 1.42GB "Monosnap vide}

s See 这 2021/2/24 下午 6:48 549.9MB "Monosnap vide}

### 本 2021/2/24 下午 5:16 2.94GB "Monosnap vide|

- vacenEi oreo eee 4 2021/2/24 下午 4:26 1.16GB "Monosnap vide|

国 2 的内信使 4 2021/2/23 下午 8:09 1.58GB "Monosnap vide|

- pasate Manta oimoe 2021/2/23 FF 5:45 967.9MB — Monosnap vide}

= 2 2021/2/23 下午 5:19 171.2MB "Monosnap vide

- AAA 4 2021/2/23 下午 4:51 1.1GB "Monosnap vide|

- tee 2021/2/23 FF 4:29 373.7MB Monosnap vide}

- Cee 2021/2/23 FF 4:12 1.18GB "Monosnap vide]

= 1 请站 4 2021/2/20 下午 6:45 1.22GB "Monosnap vide}

Sa a 2021/2/20 F 4:03 872.2MB — Monosnap vide}

- tose 人 2021/2/19 下午 4:39 610.3MB "Monosnap vide}

Rn 2021/2/19 下午 3:36 492.6MB "Monosnap vide}

Ba 11_ 怜虫概述.mp4 20

```python
src=
                l= aN (fa oo 血
```

就可以了. 但是, 如果你这么做. 你的用户和老板一定会把丛

LAY LD 是, 如果你这么做. 你的用户和老 MSNA

临头. 为什么呢?

Re、

ERA) 7) nt 个 Ves RS y) 5 你 y 户和你

假设你的视频是 10 个 G 的高清无码大资源. 那么此时, 你的用

将面临如下困境

老板将面临如下困境

1. 用户: 这个视频怎么加载的这么慢. 点击快进也快进不了. 太慢

XMS 载的这么慢. 点击快进也快进不了. Als

```python
>> n=}
```

了. 塔唤的烦死了.

Ah tt 1

2. 老板: 怎么这个月的流量费又这么高啊. 要死的拉好了

```python
IN a WY= lt Sea 女 Nw
```

![抓取让你睡不着觉的视频 - 第2页](assets/video-scraping/page-02.png)

## 为什么会这样? 聪明的我告诉你答案. 你的视频那么大. 每次用户打

### 开的时候. 可能只是差了最后几分钟没看呢. 那此时它必须把整个视

频都传输完毕. 才能看到他想看的那里. 等待时间肯定超长的好不. 而

### 每次都要把 10G 的文件进行网络传输. 流量费 ~ 你懂的. 三大运营商最

喜欢的就是你这种朴实无华的送钱行为.

### OK~ 不扯了. 但凡有点儿经验的程序员肯定会想办法把用户上传好

的视频进行转码 (不同清晰度) 做切片 ts) 处理. 这样既方便用户进行大

### 跨度的调整进度条 (最小延迟). 也能为公司节省大量的流量费.

### 既然要把视频切成非常多个小碎片. 那就需要有个文件来记录这些小

### 碎片的路径. 该文件一般为 M3U 文件. M3U 文件中的内容经过 UTF-8

### 的编码后, 就是 M3U8 文件. 今天, 我们看到的各大视频网站平台使用

### 的几乎都是 M3U8 文件.

如何解读 M3U8 文件.

```python
#EXTMBU
#EXT-X-VERSION: 3
#EXT-X-TARGETDURATION: 13 ——=s © yA
#EXT-X-MEDIA-SEQUENCE: 0
#EXT-X-KEY: METHOD=AES-128, URT="key.key" =P
#EXTINF!12.600000, 一一人 -1
```

cFN803436000.ts

```python
#EXTINF: 10. 000000,
```

cFN803436001.ts

```python
#EXTINF:10.000000,|
```

cFN803436004. ts

```python
#EXTINF: 10. 000000,
```

cFN803436005.ts

## 基本知道这些就够了.

### 2. 先来个简单的试试

### 目标: 哲仁皇后. 走起

```python
import requests
import re
```

```python
headers = {
```

}

```python
url = "https://ww.91kanju.com/vod-pLlay/54812-1-
```

```python
resp = requests.get(urL, headers=headers)
```

```python
obj = re.compile(r"url: 'C?P<url>.*?)',", re.S)
result = obj.search(Cresp.text)
resp.close()
```

```python
url = result.groupC'url')
```

```python
resp2 = requests.get(url, headers=headers)
f = open("#4(—+/e.m3u8", mode="wb")
f.write(resp2.content)
resp2.close()
f.close()
```

```python
# 读取 m3u8 视频文件
with open("#4(-2/a.m3u8", mode="r",
encoding="utf-8") as f:
    count = 1
    for line in f:
        Line = Line.strip()
        if line.startswith("#"):
            continue
```

```python
        resp3 = requests.get(Line,
headers=headers)
        with open(f"video2/{count}.ts",
mode="wb") as ff:
            ff.write(resp3.content)
        resp3.close()
```

count += 1

print(" 完事儿 1 个 "7

```python
if count>= 10: # 测试. 别整太过分
    break
```

```python
# 最后， 需要用 quick time 把视频拼接起来.
# 看到了么. 上面那个居然没有用协程， 也没有多线程. 为什么
```

### We? 因为太简单了.我们来个复杂的,

### 3. 真正的挑战. 抓取 <越狱> 视频第一集

### Bt, 盯紧我们的目标, 你会发现, 我们想要的视频被放在了一个

### iframe 里面

我们打开这个 iframe 的链接, 发现这个链接里拨套了一个播放器.

![抓取让你睡不着觉的视频 - 第6页](assets/video-scraping/page-06.png)

```html
<div class="dpNayer=mask"></div> ad
 ps://boba. S2kuyun.com/20170906/Moh2192V/1. jpg" preload="metadata" src="blob:httos://bob: kt ad
 'yun. con/236667¢3-Ccaf—4caa-a1.c6-34745fal76ea"></video> 一 $0 ——— co
> <div class="dplayer-controtler">-</div> blob:xxxx]
<div class="dplayer-menu dplayer-menu-show" style="left: 618px; right: initial; top: 74px; bott *
<div class="dplayer-notice"></div> 好
<div style="display:none" name="sizeview" vatue=-"392824811"></div> Int
```

- Console What's New:

```python
'A DevTools failed to load SourceMap: Could not load content for https://boba.52kuyun.com/DPlayer/DPlayer.i
```

### 而这个播放器中的视频地址是一个 blob:xxxx, 这是个什么鬼

### 并不是 iv 是 html5 中 bloby 起给 video 标签

- 一 C. 说简单点儿. web 已见频

### 百生成的一串标记. 说简单点儿. 就是能直接拿到人钢闫下

```python
一、 33 Ae 占 = 小 — 4b ew i"
```

地址, 中间倒了一手而已

、

此路不通， a 这个页页面源代码.

S38, 我们再去观察一下这面的页面源代码

![抓取让你睡不着觉的视频 - 第7页](assets/video-scraping/page-07.png)

```html
  </div>
</div>
```

1

```html
} 22 <div id="a1"></div>
| x <div style="display:none" name="playtime" value="2621"></div>
      <div style="display:none" name="sizeview" value="302824811"></div>
      <script type="text/javascript" src="/js/jquery-1.11.2.min.js" charset="utf-8"></script>
      <script type="text/javascript" src="/ckplayerx/ckplayer.js" charset="utf-8"></script>
         <link rel="stylesheet" href="/DPlayer/DPlayer.min.css">
      <script src="/DPlayer/DPlayer.min. js"></script>
         <script src="/hls.min.js"></script>
            <script type="text/javascript">
 32 var video_player= 'dplayer*
       var tracker_url = '*
       var signaler_url = ''
 35 var hosts = 7's
       var redirecturl = "http://vip.okzybo.com";
       var videoid = xfPsONPHVYGhNzFp;
       var id = 'xfPs9NPHvYGhNzFp*
       var le"
       var r= 8
       var t= '15'
```

```html
    </script>
    <script type="text/javascript" src="/js/share.js" charset="utf-8"></script>
    <script type="text/javascript">
5a </script>
```

<! 一 /广告添加区域 -~->

```html
</body>
</html>
```

抓取这个视频的整体思路:

### 拿到主页的页面源代码. 获取到 iframe 的链接

拿到 iframe 链接的页面源代码. 获取到 m3u8 链接

下载 m3u8 文件 (2 层), 稍显繁琐

对文件进行检索， 拿到小视频的链接, 进行异步下载

解密合并小的切片文件还原为大的 MP4 文件进行播放

FA, 我们在浏览器的 network 中也能非常清晰的看到整个浏碗器的

请求过程, 几乎和我们刚才总结的思路是一致的接下来, 上代码吧.

我依然会分步骤的去摘述如何抓取到最后的视频文件

```python
import requests
from bs4 import BeautifulSoup
import re
```

![抓取让你睡不着觉的视频 - 第8页](assets/video-scraping/page-08.png)

```python
import asyncio
import aiohttp
import aiofiles
from Crypto.Cipher import AES
import os
```

```python
def get_iframe_urlC(urlL):
    resp = requests.get(urlL)
    main_page = BeautifulSoupCresp.text,
```

```python
iframe = main_page.find("iframe")
resp.close()
return iframe.get("src")
```

```python
def get_first_m3u8_urLCiframe_url1):
    iframe_resp = requests.get(iframe_urlL)
```

```python
resp.encoding='utf-8'
with open(name, mode="w", encoding="utf-8")
```

as f:

```python
    f.write(resp. text)
resp.close()
```

```python
async def download_ts(session, url, name):
```

async with session.getCurL) as resp:

async with

```python
aiofiles.open(f"video3/{name}", mode="wb") as f:
            await f.write(await
resp.content.read())
```

printCf" {name}~OK!")

```python
async def aio_download(Cup_ur1L):
    tasks = []
```

async with aiofiles.open("#—

```python
_tmp_m3u8.txt", mode="r", encoding="utf-8") as
```

f:

```python
async with aiohttp.ClientSessiond) as
```

session:

async for line in f:

```python
if line.startswithC"#"):
    continue
```

```python
Line = Line.stripQ)
ts_url = up_url + / + line
name = Line
# 将异步任务添加到列表
```

name))

```python
# Fri!!
await asyncio.wait(tasks)
```

```python
def get_key(Curl):
    resp = requests.get(urlL)
    resp.encoding='utf-8'
    key = resp.text
    resp.close()
    return key
```

```python
async def dec_tsCname, key):
    aes = AES.new(Ckey=key,
IV=b"Q@000000000000000", mode=AES.MODE_CBC)
```

async with aiofiles.openC"video3" + / +

```python
name, mode="rb") as f1,.
```

aiofiles.openC"video4" + / +

```python
tmp_ + name, mode="wb") as f2:
```

```python
    bs = await fl1.readQ)
    await f2.write(aes.decrypt(bs))
print(f" {name}~f#20K~")
```

```python
async def aio_dec(key):
    tasks = []
```

### async with aiofiles.open(" 第二层

```python
_tmp_m3u8.txt", mode="r", encoding="utf-8") as
```

f:

async for line in f:

```python
    if line.startswithC"#"):
        continue
    Line = Line.stripQ
    tasks.append(dec_ts(line, key))
# 异步解密
await asyncio.wait(tasks)
```

```python
def merge_ts():
    s=f[]
```

```python
for line in f:
    if Line.startswith("#"):
        continue
```

```python
Line = Line.stripQ
s.append("./video4/tmp_"+Line)
```

{names}> movie.mp4")

```python
# 主程序
def mainCurl):
    iframe_url = get_iframe_url(Curl)
    #1. iframe 的域名
    iframe_domain = iframe_url.split("/share/")
```

[0]

```python
#2. S3lm3us8ibytCanm)
first_m3u8_url =
```

```python
# 3.1 下载 first_m3u8
first_m3u8_url = iframe_domain +
```

first_m3u8_url

```python
# 3.2 拿到 m3u8 的上层 urL， 目的是拼接第二层 m3u8 的
```

ur1L 以及后面的 key. key 等等

```python
    first_m3u8_url_up =
    # 3.3 下载第二层 m3u8 文件
    with open("Ji/e_tmp_m3u8.txt", mode="r",
encoding='utf-8') as f:
```

```python
for line in f:
    if line.startswithC"#"):
        continue
    else:
        second_m3u8_url =
```

first_m3u8_url_up + / + Lline.stripQ)

```python
   #4, 读取第二层 m3u8 文件， 开始下载 ts
   second_m3u8_url_up =
   # 异步下载
asyncio.run(aio_downLoad(second_m3u8_url_up))
# 测试的时候慎重啊
   #5. 解密与合并
   #5.1. 拿到 key
   key = get_keyCsecond_m3u8_url_up +
```

```python
# print(key)
# key = c5878c26baaaac8c
#5.2. 解密
asyncio.run(aio_dec(key))
#5.3. 合并
merge_ts()
```

```python
if __name__ == '__main__':
    url = "https://ww.91kanju.com/vod-pLlay/541-
```

maincur1)

### 备注: 不是所有的视频网站都是这样的. 例如, bilibili, BAAS, 必须

### 得单独想其他办法. 原因我就不讲了. 稍显复杂.
