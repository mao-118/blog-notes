# 代理

### 当我们反复抓取一个网站时, 由于请求过于频繁, 服务器很可能会将

### 你的 |P 进行封锁来反息, 应对方案就是通过网络代理的形式进行伪

### 代理的原理:

从图上可以得知. 对于目标网站来说. 是通过代理服务器发送的请求.

也就可以避免你的 IP 被封锁了.

看虫如何使用代理

```python
import requests
```

```python
headers = {
```

}

```python
proxies = {
    https: https://27.148.248.203:80
```

}

```python
resp = requests.get("https://www.baidu.com",
headers=headers, proxies=proxies)
print(resp.text)
```

注意: 代理 IP 一般属于一个灰色产业. 在本课程中不做深入讨论. 代理

IP 也是时能用,时不能用. 各为观众姥爷要自己想办法了 ~
