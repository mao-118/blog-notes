# re模块

## re 模块

### 那么接下来的问题是, 正则我会写了, 怎么在 python 程序中使用正则

### 呢? 答案是 re 模块

### re 模块中我们只需要记住这么几个功能就足够我们使用了.

### 1. findall 查找所有. 返回 list

printClst) # (C'm', 'm', 'm']

'5000']

2. search 会进行匹配. 但是如果匹配到了第一个结果. 就会返回这

个结果. 如果匹配不上 search 返回的则是 None

```python
ret = re.match('a', 'abc').groupC)
```

printCret) #a

4. finditer, 和 findall 差不多. 只不过这时返回的是迭代器 (重点)

```python
for el in it:
```

### printCel.groupQ)) # 依然需要分组

### 5. compile) 可以将一个长长的正则进行预加载. 方便后面的使用

```python
obj = re.compile(r'\d{3}') # 将正则表达式编译成为
```

### 一个正则表达式对象， 规则要匹配的是 3 个数字

```python
ret = obj.search('abci23eeee') # 正则表达式对象调
```

用 search， 参数为待匹配的字符串

```python
print(ret.group()) # 结果: 123
```

6. 正则中的内容如何单独提取?

单独获取到正则中的具体内容可以给分组起名字

```html
<div class= ' 西游记 '><span id='10010'> 中国联通
</span></div>
```

```python
obj = re.compile(r"<span id="(?P<id>\d+)'>C?
P<name>\w+)</span>", re.S)
```

```python
result = obj.search(s)
```

### printCresult.groupQ)) # 结果: <span

```python
# 结果: 10010 # 获取
```

### id 组的内容

```python
print(result.groupC"name")) # 结果: 中国联通 #
```

获取 name 组的内容

这里可以看到我们可以通过使用分组. 来对正则匹配到的内容进

一步的进行筛选.

关于正则, 还有一个重要的小点, 也非常的简单, 在本节中就不继续扩

RS. 下一小节的案例中会把这个小点进行简单的介绍.
