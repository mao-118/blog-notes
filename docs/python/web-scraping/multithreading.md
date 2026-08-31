# 多线程

### 多线程

### python 中实现多线程非常简单. 我们要借助 Thread 类来完成.

### 先看单线程效果 ~

```python
def func(D):
    for i in range(1000):
```

printC"func", i)

```python
1f __name__ == '__main__':
```

funcd)

```python
for i in range(1000):
```

printC"main", i)

```python
def func():
   for i in range(1000):
      print("func", i)
```

```python
> Dif name == '_main_':
     func()
     for i in range(100Q):
        print("main", i)
```

```python
if __name_ == '_main_'
```

Run: © 02_ 多线程 «

> func 997

Ger

- main 2

main 3

main A

执行过程: 程序启动 --> 加载 func(--> 执行 main --> 调用 func(0 -->

func 执行完毕, 继续执行 main 中的内容

整个过程是一条线跑下来的, 这就是单线程.

多线程:

```python
from threading import Thread
```

```python
def func():
    for i in range(1000):
```

printC"func", 1)

```python
if __name__ == '__main__':
    t = Thread(target=func)
```

t.startQ

```python
for i in range(1000):
```

printC"main", i)

```python
    from threading import Thread
    def func():
      for i in range(1000):
        print("func", i)
29> if _name_ == ' main_':
      t = Thread(target=func)
      t.start()
      for i in range(1000):
        print("main", i)
```

Run: @ 02_ 多线程

> main28

12func 29

w (= func 30

~ = func

* = main 13

```python
@ main 14
```

Main 15 31

funcmain 32

func 33 16

main 17

程序效果: main 和 func 交蔡执行 (如果速度够快, 给我们的感觉就是一

起执行)

执行过程: 加载 func(0 -> 执行 main -> 创建子线程 t -> 子线程 t 启动 ->

执行 func 中的内容 |-> 继续执行 main

我们成功的让两件事同时发生了. 那么想一下如果我有 1000 个 url 准

备去下载. 那么交给每个 func 单独去执行就好了啊. 主图数该干嘛还

## 误区:

### 你说了.单线程是一条线跑下来的, 那我如果写个 if 是不是就是两条线

### 了?3

### 非也 ~, 我们先看图.

| 程序结束

我们要注意一个细节. 不论程序真还是假. 它只能选择一条路走. 所以

还是单线程. 并没有异步的效果

多线程的另一种与法

```python
from threading import Thread
```

```python
class MyThreadCThread):
    def run(self):
        for i in range(1000):
```

printC"func", 1)

```python
if __name__ == '__main__':
    t = MyThread()
```

t.startQ

```python
for i in range(1000):
```

printC"main", 1)

### 执行效果是一样的. 这里就不放图了.
