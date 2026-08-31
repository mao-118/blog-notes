# requests进阶_headers

我们在之前的爬虫中其实已经使用过 headers 了. header 为 HTTP 协

### 议中的请求头. 一般存放一些和请求内容无关的数据. 有时也会存放

一些安全验证信息.比如常见的 UserrAgent, token, cookie 等.

通过 requests 发送的请求, 我们可以把请求头信息放在 headers 中. 也

### 可以单独进行存放, 最终由 requests 自动帮有我们拼接成完整的 http 请

本章内容:

1. 模拟浏览器登录 -> 处理 cookie

防盗链处理 -> 抓取梨视频数据

3. 代理 -> 防止被封 IP

综合训练:

抓取网易云音乐评论信息
