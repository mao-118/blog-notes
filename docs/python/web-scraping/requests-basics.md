# requests模块入门

## requests 模块入 |

二上 \

在前面小节中, 我们使用 urllib 来抓取页面源代码. 这个是 python 内置

### 的一个模块. 但是, 它并不是我们党用的讨虫工具. 常用的抓取页面的

```python
模块通常使用一个第三方模块 requests. 这个模块的优势就是比 urllib
```

### 还要简单, 并且处理各种请求都比较方便.

### 既然是第三方模块, 那就需要我们对该模块进行安装, 安装方法:

pip install requests

如果安装速度慢的话可以改用国内的源进行下载安装.

pip install -i

```python
https://pypi.tuna.tsinghua.edu.cn/simple requests
```

Ey memset -inchamPrece/ XIAO 1 from urllib.request import urlopen Oe

```python
. Abaidu. het 3 resp = urlopen("http://www.baidu.com") # 打开 HE =
```

> External Libraries 4 5

```python
x 5 # print(resp.read().decode("utf-8")) # 打印抓取到的内容
```

~ 6

```python
with open("baidu.html",modes"w", encodings"utf-8") as f: # 创建文件
  f.write(resp.read().decode("utf-8")) # 保存在文件中
```

a

Terminal: Local + e-

The default interactive shell is now zsh.

To update your account to use zsh, please run "chsh -s /bin/zsh 2

```python
For more details, please visit https://support.apple.com/kb/HT208050.
(base) sylardeMacBook-Pro:f@%&i® sylar$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
```

Requirement already satisfied: requests in /Users/sylar/opt/anaconda3/lib/python3.7/site-packages (2.22.0)

Requirement already satisfied: chardet<3.1.0,>=3.0.2 in /Users/sylar/opt/anaconda3/1lib/python3.7/site-packages (from requests) (3.0

.4)

Requirement already satisfied: certifi>=2017.4.17 in /Users/sytar/opt/anaconda3/Lib/python3.7/site-packages (from requests) (2019.1

1.28)

Requirement already satisfied: urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 in /Users/sylar/opt/anaconda3/lib/python3.7/site-packages (f

rom requests) (1.25.8)

Requirement already satisfied: idna<2.9,>=2.5 in /Users/sylar/opt/anaconda3/1ib/python3.7/site-packages (from requests) (2.8)

| |

o oa LF UTF-8 Aspaces Python 3.7 Ye @ ff [09 of 1981m

先拿 Sogou 开刀试试.

```python
# 案例 1. 抓取搜狗搜索内容
kw = input("请输入你要搜索的内容:")
response =
requests.get(f"https://www. sogou.com/web?query=
```

### {kw}") # 发送 get 请求

```python
# print(response.text) # 直接拿结果 (文本)
```

```python
with open("sogou.html", mode="w", encoding="utf-
```

8") as f:

```python
f.write(response.text)
```

接下来, KINA—TMAWSABA-AAN, 百度翻译 ~

注意百度翻译这个 url 不好弄出来. 记住， 在输入的时候， 关掉各种输入法，

要用喘文输入法， 然后不要回车.就能看到这个 sug 了

![requests模块入门 - 第3页](assets/requests-basics/page-3.png)

```python
# 案例 2. 抓取百度翻译数据
```

```python
# 准备参数
kw = input(" 请输入你要翻译的英语单词:")
dic = {
```

### kw: kw # 这里要和抓包工具里的参数一致

】

```python
# 请注意百度翻译的 Sug 这个 ur1L. 它是通过 post 方式进行提交
```

### 的.所以我们也要模拟 post 请求

```python
resp =
requests.post("https://fanyi.baidu.com/sug",
data=dic)
```

```python
# 返回值是 json 那就可以直接解析成 json
resp_json = presp.]json(D)
# {'errno': @, 'data': [{"k': 'Apple', 'v': 'n.
```

printCresp_json['data'][@]['v']) # 拿到返回字典中的

内容

[optonacondaabapyiong /Users/sylar/PycharmProjects//\LA/MeR&ik/#—S/06. requests 模块.py

i' 苹果公司， 原称苹果电脑公司

是不是很顺手呢? 还有一些网站在进行请求的时候会校验你的客户

端设备型号. 比如, 我们抓取豆瓣电影

```python
# 案例 3: MPG
url = 'https://movie.douban.com/j/chart/top_list'
param = {
```

### 'Q',# 从库中的第几部电影去取

'Mozilla/5.Q@ (Macintosh; Intel

Mac OS X 10_12_0) AppleWebKit/537.36 CKHTML, Like

Gecko) Chrome/72.0.3626.121 Safari/537.36'

}

```python
response =
requests.get(Curl=url, params=param,headers=headers
```

)

```python
List_data = response. json()
```

```python
fp = open('./douban. json", 'w',encoding='utf-8")
json.dump(list_data, fp=fp,ensure_ascii=False)
```

printC'over!!!")

OK~ 本章和本小节的内容就这么多了. 简单回顾一下本章内容

## 疏虫就是与程序去模拟浏览器用来抓取互联网上的内容

### 2. python 中自带了一个 urllib 提供给我们进行简易爬虫的编写

3. requests 模块的简单使用, 包括 get, post 两种方式的请求. 以及

### User-Agent 的介绍.
