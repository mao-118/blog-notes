# bs4解析-bs4模块安装和使用

## 喘块安丢和使

### bs4 模块安委和使用

### abs4 模块安装

### 在 python 中我一般只推荐用 pip 进行安装. 原因: 简单山

pip install bs4

如果安装的速度慢, 建议更换国内源 (推荐阿里源或者清华源)

pip install -1

```python
https://pypi.tuna.tsinghua.edu.cn/simple bs4
```

- 如何使用 bs4

bs4 在使用的时候就需要参照一些 html 的基本语法来进行使用

了. 我们直接上案例哈. 案例是最能直观的展现出 bs4 的便捷效果

的.

我们来尝试抓取北京新发地市场的农产品价格. http:/Avww.xinf

adi.com.cn/marketanalysis/O/list/1.shtml

### 老规矩, 先获取页面源代码. 并且确定数据就在页面源代码中 ~

```python
import requests
from bs4 import BeautifulSoup
```

```python
resp =
requests.get("http://ww. xinfadi.com.cn/market
```

```python
print(resp.text)
```

将页面源代码丢给 BeautifulSoup, 然后我们就可以通过 bs 对象

去检索页面源代码中的 html 标签了

```python
page = BeautifulSoupCresp. text)
```

BeautifulSoup 对象获取 html 中的内容主要通过两个方法来完成

```python
= find()
```

![bs4解析-bs4模块安装和使用 - 第2页](assets/bs4-installation-and-usage/page-2.png)

```python
  = find_all()
 ®find_all(self, name, attrs, recursive, text, limit, kwargs) Tag
 @ find_next(self, name, attrs, text, kwargs) PageElement
 @ findALl Tag
 @ find(hild Tag
@ find_all_next(self, name, attrs, text, limit, kwargs) PageElement
@ find_all_previous(self, name, attrs, text, limit, kw.. PageElement
_© find_next_sibling(self, name, attrs, text, kwargs) PageElement
```

,® find_next_siblings(self, name, attrs, text, limit, k.. PageElement

```python
_@ find_parent(self, name, attrs, kwargs) PageElement
```

_@ find_parents (self, name, attrs, limit, kwargs) PageElement

```python
@ find_previous(self, name, attrs, text, kwargs) PageElement
```

'@ find_previous_sibling(self, name, attrs, text, kwarg.. PageElement

; press ^ to choose the selected (or first) suggestion crdlineamadhnettaents Next Tip —::

### 基本上有这两个方法就够用了. 其他的可以自行进行英文翻译就

### 知道啥意思了.

### 不论是 find 还是 find_all 参数几乎是一致的.

```python
find(标签, 属性 = 值)
```

意思是在页面中查找 xxx 标签, 并且标签的 xxx 属性必须是 xxx 值

例:

```python
find('div', age=18) 含义: 在页面中查找 div 标签, 并且属性 age 必
```

须是 18 的这个标签.

```python
find_all0 的用法和 find(几乎一致. find(查找 1 个. find_all0 查找页
```

面中所有的.

但是这种与法会有些问题. 比如 html 标签中的 class 属性.

```html
<div class="honor">
```

```python
page.find("div", class="honor")
```

### 注意，python 中 cLass 是关键字. 会报错的. 怎么办呢 " 可

### 以在 class 后面加个下划绪

```python
page.find("div", class_="honor")
```

### 我们可以使用第二种写法来避免这类问题出现

```python
page.find("div", attrs={"class": "honor})
```

### 好了, 用法说完了. 接下来就回来看怎么抓取新发地的价格吧

```python
table = page.find("table", class_="hg_table")
```

printCtable)

![bs4解析-bs4模块安装和使用 - 第4页](assets/bs4-installation-and-usage/page-4.png)

_ 0 06_bs4 模块使用 py

i import requests

ip from bs4 import BeautifulSoup

```python
i 4 resp = requests.get ("http://www.xinfadi.com.cn/marketanalysis/@/List/1. shtml")
BG page = BeautifulSoup(resp. text)
    table = page.find("table", class_="hq_table")
    print(table)
```

Run:。 写 06_bs4 模块使用

```python
 >» 人 <table class="hq_table">
 = ® <td class="td_1" width="90">m%</td>
 » 兰 <td width="99"> 最低价 </td>
  <td width="90"> 平均价 </td>
  © <td width="96"> 最高价 </td>
    <td width="90"> 规格 </td>
    <td width="86"> 单位 </td>
    <td width="96"> 发布日期 </td>
    <td width="10"> </td>
    </tr>
    <tr class="tr_color"><td style="text-a|lign: left; padding-left: 5px;">2EHBF (挂油) </td><td>17.00<
} </table>
```

### 完美 ~

i

### 接下来就可以进一步去提取数据了. 后面的直接给出完整代码.

### 因为逻辑都是一样的. 并没有多么的复杂, 过程就省略了. MRI

DER, 去看视频吧. 视频会讲解的详细一些

```python
import requests
from bs4 import BeautifulSoup
import csv
```

```python
resp =
requests.get("http://ww. xinfadi.com.cn/marke
```

```python
page = BeautifulSoupCresp. text)
```

```python
table = page.find("table", class_="hq_table")
f = open(" 新发地.csSv"，mode="w'"，
encoding="utf-8")
cv_writer = csv.writer(f)
# 提取到所有 tn
tr_list = table.find_all("tr")[1:] # 注意,第一
```

### 行并不是我想要的数据. 《第一行是表头)

```python
for tr in tr_list:
    td_list = tr.find_all("td")
    name = td_list[Q].text # 获取文本内容
    low = td_list[1].text
    avg = td_list[2].text
    high = td_list[3].text
    gui = td_Llist[4].text
    dan = td_list[5].text
    day = td_list[6].text
```

cv_writer.writerow([name, low, avg, high,

gui, dan, day])

```python
f.close(C)
print(faze")
```

有人可能要问了. 为什么只有第一页数据. 你观察一下第二页, 第

三页的 url 就明白了了

```python
http://www. xinfadi.com.cn/marketanalysis/0/1Lis
http://www. xinfadi.com.cn/marketanalysis/@/1Lis
```

此处省略一万个字 ~

![bs4解析-bs4模块安装和使用 - 第7页](assets/bs4-installation-and-usage/page-7.png)
