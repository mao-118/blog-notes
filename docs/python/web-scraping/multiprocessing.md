# 多进程

、 co

### 这个更好理解. 通过主程序去创建多个进程来完成并行的效果

```python
from multiprocessing import Process
```

```python
def func():
    for i in range(1000):
```

printC"func", i)

```python
if __name__ == '__main__':
    p = Process(target=func)
    p.start()
```

```python
for i in range(1000):
```

printC"main", i)

发现没有, 写法和多线程几乎一模一样

## 第二种与法

```python
class MyProcess(Process):
    def run(self):
        for i in range(1000):
```

printC"MyProcess", 1)

```python
1f __name__ == '__main__':
    t = MyProcess()
```

t.startd)

```python
for i in range(1000):
```

printC"main", 1)

注意, python 的作者其实做了一件大好事. 本质上多线程和多进程的

执行过程是不一样的, python 的作者为了让开发人员和更舒服. 采用了

几乎完全相同的 API. 我们就跟着捡便宜了. 哈哈

第二个问题, 传参

```python
def funcCname):
    for i in range(10Q):
```

printCname, 1)

```python
if __name__ == '__main__':
    t1 = Thread(target=func, args=C"l7z<6",))
    t2 = Thread(target=func, args=C("—EAR",))
```

t1.startQ

t2.startQ)

### ATR BARMAN lel. 还有神马 GIL 锁. 有兴趣的大佬们可以

### 自行百度或者观看我的关于基础进阶的教程. 会有更加详细的亩述.

在这里不过多介绍了, 毕竟咱这是爬虫课. 不是基础扫盲课. 够用即可
