# aiohttp多任务异步协程

## | 多任务异步协程

### aiohttp 多任务卉步协酝

aiohttp 是 python 的一个非常优秀的第三方异步 http 请求库. 我们可以

### 用 aiohttp 来编与异步爬虫 (协程)

pip install aiohttp

实例代码:

```python
import aiohttp
import asyncio
import time
import requests
# 异步下载
async def aiodownload(url, session):
    name = url.split("/")[-1]
```

```python
# 发送请求， 这里和 requests.get() 几乎没区别， 除了代
```

### 理换成了 proxy

async with session.getCurLl) as resp:

```python
# 读取数据， 如果想要读取源代码， 直接
```

### resp.textQO Bla. 比原来多了个 ()

```python
content = await resp.content.read()
# 写入文件， 有兴趣可以参考 aiofiles， 我这里根本
```

个需要.

```python
with open(name, mode="wb") as f:
```

f.writeCcontent)

```python
async def main():
    # 创建 session 对象 -> 相当于 requests 对象
    async with aiohttp.ClientSession() as
```

session:

```python
        # 添加下载任务
        tasks =
Lasyncio.create_task(aiodownloadCurl, session))
for url in urls]
        # 等待所有任务下载完成
        await asyncio.wait(tasks)
```

```python
# 同步方式下载图片
def download(url):
```

```python
name = url.split("/")[-1]
resp = requests.get(urlL)
content = resp.content
with open(name, mode="wb") as f:
```

33) f.writeCcontent)

```python
# 我故意型了一堆 ur1L 做测试
urls = [
```

![aiohttp多任务异步协程 - 第4页](assets/aiohttp-async-coroutines/page-4.png)

![aiohttp多任务异步协程 - 第5页](assets/aiohttp-async-coroutines/page-5.png)

|

```python
if __name__ == '__main__':
    t2 = time.time()
    for url in urls:
        downLoadC(urL)
```

printCtime.timed) - t2)

```python
t1 = time.time()
# 异步爬虫
asyncio.run(main())
```

printCtime.timeC) - t1)

### 显高了很多

![aiohttp多任务异步协程 - 第7页](assets/aiohttp-async-coroutines/page-7.png)
