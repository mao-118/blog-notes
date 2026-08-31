# iframe处理, 多窗口调度

### 我们书接上回. 上回说到我们已经可以通过 selenium 拿到拉和钩网的招

### 聘信息了. 但是, 信息不够全面. 我们希望得到的不仅仅是一个岗位名

### 称和公司名称, 我更想知道更加详细的职位摘述以及岗位要求.

此时问题就来了. 我们可以在搜索页面点击进入到这个详情页. 然后

就可以看到想要的职位描述了. 但是, 这时就涉及到如何从一个窗口

转向另一个窗口了 (切换选项卡).

首先, 我们先通过 selenium 定位到搜索页上的职位超链接.

![iframe处理, 多窗口调度 - 第1页](assets/iframe-and-multiple-windows/page-1.png)

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import time
```

```python
web = Chrome()
web.get("http://ww. lLagou.com")
```

web.find_eLement_by_xpathC7 LA

```python
time.sleep(2)
```

web.find_element_by_xpathC'//*

```python
[@id="search_input"]').send_keysC"python",
```

```python
time.sleep(2)
# 不要红包
```

web.find_eLement_by_xpathC'/html/body/div[8]/div/

div[2]').clickO

```python
#4 点击职位
```

web.find_element_by_xpath('//*

```python
[@id="s_position_Llist"]/ul/1i[1]/div[1]/div[1]/di
time.sleep(1)
```

正片开始

```python
C 和 @@ lagou.coryiobs/8224803.html?show=387e11e2647b43958051f9ddab91b2a8 we 个 i
```

Chrome 正受到自动测试软件的控制。 NARMS MAO. (Sal!!! € selenium 中记录的还是原来的那个窗口 x

首页 | (ABI 校园招聘 | RL 言职 ie APP 上传附件简历登录 | 注册进入企

### 依。 1084925 家公司 | seers 在拉匀等你 | E

=

```python
@
```

夜莺科技招聘 a

### python 后端工程师 Bl

15k-22k /武汉 / 经验不限 / 学历不限 / 全职图完善在线简历 f 上传附件简历 8B

<€ 该职位正在急招， 应聘成功率更高 en

职位诱惑;

KES 涨薪快下午茶 5A 写字楼扁平化管理

职位描述: 夜营科技

【关于我们 】 88 企业服务

```python
https://shimo.im/docs/wVdjQH8dytQKy3xg 《我们是 REAR)
```

【岗位要求 】

-熟悉 Python 语言; 钧 "国内顶级资源方战略亿元融资 (A

- 熟悉 Mysql 的使用; 轮)， 真格基金 (天使轮)

-熟悉 Flask 框架

- 熟悉 Linux 和 Shell 的使用， 最好使用 Linux 或 Mac 作为日常工作环境 S& 150-500 人

- 善于沟通， 有良好的语言组织能力

```python
@ __https://weibanzhushou.com
```

注意! 我们看到的是新窗口的内容, 但是在 selenium 的视角里, BOK

然停留在刚才那个窗口. 此时, 必须要将窗口调整到最新的窗口上才

```python
Sts =、 S59 a ss
```

可以.

web.Switch_to.windowCweb.window_handles[-1]7)

```python
job_detail = web.find_element_by_xpath(
```

![iframe处理, 多窗口调度 - 第3页](assets/iframe-and-multiple-windows/page-3.png)

## 接下来我们来看另一种操作

SA

### 之前我们抓取过一个网站. 里面把视频内容谋套在一个 iframe 中. 那

。 SN 人。

### 如果换成 lenium 应该如何应对

### 果换成了 selenium 应该如何应对呢?

```python
aun » <header class="stui-header_top clearfix top-fixed headroom--not-bottom top-fixed-up headroom-
```

```html
 欧美剧美国 005 详情 <div class="dplayer-menu" style="left: 284px; right: initial; top: 347px; b
aif </aiv> =
 第 06 集第 07 集第 08 集第 09 集第 10 集 <link rel="stylesheet" href="/DPlayer/DPlayer,min.css">
```

![iframe处理, 多窗口调度 - 第4页](assets/iframe-and-multiple-windows/page-4.png)

```python
web = Chrome()
web.get("https://ww.91kanju.com/vod-pLay/541-2-
```

```python
# 找到那个 iframe
iframe = web.find_element_by_xpathC'//*
[@id="pLlayer_iframe"]")
```

```python
web.switch_to. frame(iframe)
val =
web. find_eLement_by_xpath('/htmlL/body/div|4]').get
```

_attributeC"value")

printCval)

![iframe处理, 多窗口调度 - 第5页](assets/iframe-and-multiple-windows/page-5.png)
