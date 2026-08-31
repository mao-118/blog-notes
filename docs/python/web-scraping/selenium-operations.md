# selenium各种神奇操作

## selenium 不但可以打开浏览器. 还可以对浏览器各种操作. 比如, 点

```python
. = A=
```

### 击, 查找. 都可以.

### 我们直接上案例. 抓取拉和钩网招聘 python 工程师的招聘信息

1. 装备工作

```python
from selenium.webdriver import Chrome
```

```python
web = Chrome()
```

```python
web.get("http://Lagou.com")
```

@©O@。 国互联网求职招聘找工作 -上拉勾搓 x +

所 C @ lagoucom x @:

Chrome 正受到自动测试软件的控制。 x

切换城市 x

亲爱的用户您好:

切换城市分站， 让我们为您提供更准确的信息

当前定位

北京

切换城市

| 武江苏

### 2. 上扣击 -全国按钮

### BE Ame MR. 我们需要先定位到这个按钮. 然后再点击

```python
/CN IN 1A" | 女 = | 自已二 IA" | 女 »_m/A iN
```

### selenium BeURTILR. 太简单了.

```python
q 林目 es A= Aw DP
```

€ C @ lagou.com x @:

Chrome 正受到自动测试软件的控制。 2 点击这个小箭头. 然后点击全国按包 x

Ga Elements Console Sources Network» 41 m@ fx

Ma div id: style:

y<div id: style:

y<div id: class:

切换城市 FF » <div class: </div

> <p class cp

span class. 切换城市 </span

亲爱的用户您好: '、

3. 右键这个按钮选择 copy

切换城市分站， 让我们为您提供更准确的信和了 ——

pq Add attribute data-city

imac, Edit as HTML

当前定位>A..<, Delete element

ra

_ 1 Cut element

北京作 "一 Copy element

» tise, Hide element

全，-U> -Force state>

```python
atab ssx40 1. 右键检查 * =ti> <Break on> Copy outerHTML
```

reli cl Copy selector

本 li sty Expand recursively Copy JS path

Collapse children ae

_ Styles Computed Layoy Scroll into view TS

| é LH Focus a

Filter thov vets) 加

clonent. style {Store as global variable 4. copy xpath

font-size: 16px;

display: inline-block;

![selenium各种神奇操作 - 第2页](assets/selenium-operations/page-2.png)

## 有了 xpath 是不是明白了些什么.

```python
from selenium.webdriver import Chrome
```

```python
web = Chrome()
```

```python
web.get("http://Lagou.com")
btn = web. find_element_by_xpath('//*
[@id="changeCityBox"]/ul/li[1]/a') # 找到全国按
```

钮

btn.clickQ) # 点击这个按钮

€> @ @ lagoucom * @:

[econ we 1 元解锁 SI

![selenium各种神奇操作 - 第3页](assets/selenium-operations/page-3.png)

## BF Ake!

3. 搜索 python

### 人的过程: 找到文本框输入 python, 上点击" 搜索" 按钮.

### 机器的过程: 找到文本框输入 python', 上点击" 搜索" 按钮.

### 发现没, 用 selenium 最更的地方就是这里. 人是怎么操作的. 机器

就怎么操作. EVRA

```python
# 找到文本框输入 python， 训击搜索按钮
```

web.find_element_by_xpathC AL

```python
[@id="search_input"]').send_keysC"python")
```

web.find_element_by_xpathC '//*

```python
   [@id="search_button"]').clickQ)
send_keys() 这里要说一下. 如果我们给出的是一个字符串. 就是
```

输入文本. 但是, 如果给出的是一个键盘指令, 那就按下键盘. 比

如, 我想要按回车按钮. 就是这样的

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import
```

Keys

```python
import time
web = Chrome()
```

```python
web.get("http://Lagou.com")
btn = web.find_element_by_xpath('//*
[@id="changeCityBox"]/ul/li[1]/a') # 找到全国
```

按钮

btn.clickQ) # 点击这个按钮

```python
time.sleep(2) # 让浏览器反应一会儿
# 找到文本框输入 python， 点击搜索按钮
[@id="search_input"]').send_keysC"python",
```

Keys. ENTER)

```python
# web. find_eLement_by_xpath('//*
[@id="search_button"]').clickQ
```

## keys 里几乎包含了我们需要的所有特殊按键

4. 提取招聘信息

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import
```

Keys

```python
import time
web = Chrome()
```

```python
web.get("http://Lagou.com")
btn = web.find_element_by_xpath('//*
[@id="changeCityBox"]/ul/li[1]/a') # 找到全国
```

按钮

btn.clickQ) # 点击这个按钮

```python
time.sleep(2) # 让浏览器反应一会儿
# 找到文本框输入 python， 点击搜索按钮
[@id="search_input"]').send_keysC"python",
```

Keys. ENTER)

```python
time.sleep(1)
# web.find_element_by_xpathC'//*
[@id="search_button"]').clickQ
```

```python
Ls = web.find_elements_by_xpathC '//*
[@id="s_position_list"]/ul/li') # 一次性提取多
```

### 个元素用 elements

```python
for item in ls:
    name =
```

item. find_element_by_xpathC'./div[1]/div[1]/d

```python
tv[1]/a/h3').text
    addr =
```

item. find_element_by_xpathC'./div[1]/div[2]/d

```python
iv[1]/a').text
```

printCname, addr)

```python
# 其他内容你自己琢磨吧
```
