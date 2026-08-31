# xpath解析

## xpath 解析

### XPath 是一门在 XML 文档中查找信息的语言. XPath 可用来在 XML

### 文档中对元素和属性进行遍历. 而我们熟知的 HTML 恰巧属于 XML 的

### 一个子集. 所以完全可以用 xpath 去查找 html 中的内容.

### 首先, 先了解几个概念.

```python
<book>
    <id>1</id>
    <name> #¥74¢ ith </name>
    <price>1.23</price>
    <author>
        <nick> 周大强 </nick>
        <nick> 周正和若 </nick>
    </author>
</book>
```

在上述 html 中，

1. book, id, name, price.… 都被称为节点.

2. Id, name, price, author 被称为 book 的子节点

3. book 被称为 id, name, price, author 的父节点

### 4. id, name, price,author 被称为同胞节点

### OK~ 有了这些基础知识后, 我们就可以开始了解 xpath 的基本语法了

### 在 python 中想要使用 xpath, 需要安装 |xml 模块.

pip install Lxml

### 用法:

### 1. 将要解析的 html 内容构造出 etree 对象.

2. 使用 etree 对象的 xpath(方法配合 xpath 表达式来完成对数据的提

取

```python
from Lxml import etree
```

```python
html = Tw
<book>
    <id>1</id>
```

```python
<price>1.23</price>
<nick> 臭豆腐 </nick>
<author>
    <nick 1d="10086"> 周大强 </nick>
    <nick 1d="10010"> 周正若 </nick>
    <nick clLass=" joy"> 周杰伦 </nick>
    <nick clLass="]joLin"> 华依林 </nick>
```

```html
    <div>
        <nick> 惹了 </nick>
    </div>
</author>
```

```python
    <partner>
        <nick id="ppc">BEREBR</nick>
        <nick id="ppbc">AEREABR</nick>
    </partner>
</book>
```

```python
et = etree.XMLChtmL)
# 根据节点进行搜索
# result = et.xpathC("/book")
# result = et.xpath("/book/id") # /在开头表示文档最
```

开始，/ 在中间表示儿子

```python
# result = et.xpath("/book//nick") # /表示后代
result = et.xpath("/book/*/nick") # * 表示通配符
```

printCresult)

xpath 如何提取属性信息. 我们上一段真实的 HTML 来给各位讲解一

下

准备 HTML:

<!DOCTYPE html>

```html
<html Lang="en">
<head>
    <meta charset="UTF-8" />
    <titLe>TitLe</titLe>
</head>
<body>
    <ul>
        <li><a href="http://www.baidu.com">BE
</a></1i>
        <li><a href="http://www.google.com">
歌 </a></Li>
        <li><a href="http://www. sogou.com">##249)
</a></1i>
    </ul>
    <ol>
        <li><a href="feiji"> b4il</a></1li>
        <li><a href="dapao">Kt#</a></1i>
        <li><a href="huoche">/K#</a></Li>
    </ol>
    <div class="job">=3i</div>
    <div class="common">#A#kiA</div>
</body>
</html>
```

xpath 解析

```python
from Lxml import etree
```

```python
tree = etree.parse("1.html")
result = tree.xpath("/htmlL/body/ul/1i/a/@href")
```

printCresult)

```python
result = tree.xpath("/html/body/ul/1i")
for Li in result:
    print(1i.xpath("./a/@href")) # 局部解析
result = tree.xpath("//div[@cLlass='job']/textQ)")
 # [@class='xxx"] 属性选取 textC) RECA
```

printCresult)
