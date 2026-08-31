# 无头浏览器

## 我们已经基本了解了 selenium 的基本使用了. 但是呢, 不知各位有没

### 有发现, 每次打开浏览器的时间都比较长. 这就比较耗时了. 我们与的

### 是爬虫程序. 目的是数据. 并不是想看网页. ABRET RELL aE

### 跑呢? 答案是可以的.

### 咱直接上案例吧. 拿出最开始我们看到的那个网页. 抓取电影票房. 并

### 且用正常的有浏览器窗口的方式来抓取. 然后再改成后台运行不就好

### 了人么

```python
from selenium.webdriver import Chrome
from selenium.webdriver.support.select import
```

Select

```python
import time
```

```python
web = Chrome()
web.get('https://ww. endata.com.cn/Box0ffice/BO/Y
```

ear/index.htm1")

```python
# 切换 select
sel = Select(Cweb.find_element_by_xpathC'//*
[@id="OptionDate"]'))
for i in range(lenCsel.options)):
    sel.select_by_index(i) # 按照索引位置切换
    time.sleep(1)
    table = web. find_element_by_xpathC'//*
[@id="TableList"]/table')
```

=")

```python
print(table. text)
```

接下来, 我们对程序进行修改. 让 selenium 在后台安安静静的执行.

```python
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import
```

Options

```python
from selenium.webdriver.support.select import
```

Select

```python
import time
# 准备无头浏览器配置信息
opt = Options()
```

```python
opt.add_argument('--headless')
opt.add_argument('--disable-gpu')
```

```python
web = Chrome(options=opt) # 将无头信息进行配置
web.get('https://www.endata.com.cn/BoxOffice/BO/Y
```

ear/index.htm1")

```python
# 切换 select
sel = Select(Cweb. find_element_by_xpathC'//*
[@id="OptionDate"]'))
for i in range(lenCsel.options)):
    sel.select_by_index(i) # 按照索引位置切换
    time.sleep(1)
    table = web. find_element_by_xpathC'//*
[@id="TabLeList" |/table')
```

==")

```python
    print(table. text)
# 打印浏览器源代码
time.sleep(3) #4 等待 js 加载完数据
print(Cweb.page_source)
```

![无头浏览器 - 第4页](assets/headless-browser/page-4.png)
