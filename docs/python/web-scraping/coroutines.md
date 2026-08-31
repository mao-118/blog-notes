# 协程

|

### 协程是我要重点去讲解的一个知识点. 它能够更加高效的利用 CPU.

### 其实, 我们能够高效的利用多线程来完成朴虫其实已经很 6 了. 但是，

### 从某种角度讲, 线程的执行效率真的就无敌了么? 我们真的充分的利

### 用 CPU 资源了么? 非也 ~ 比如, 我们来看下面这个例子.

### 我们单独的用一个线程来完成某一个操作. 看看它的效率是否真的能

### 把 CPU 完全利用起来.

```python
import time
```

```python
def funcQ():
```

## 切换到其他程序上去执行. 此时, 对于你来说, CPU 其实并没有为你

### 工作 (在这三秒内), 那么我们能不能通过某种手段, 让 CPU 一直为我而

工作. 尽量的不要去管其他人.

### 我们要知道 CPU 一般抛开执行周期不谈, 如果一个线程遇到了 IO 操

### fF, CPU 就会目动的切换到其他线程进行执行. BA, 如果我想办法

### 让我的线程遇到了 IO 操作束挂起, 留下的都是运算操作. 那 CPU 是不

### 是就会长时间的来照顾我 ~.

### 以此为目的, 伟大的程序员就发明了一个新的执行过程. 当线程中遇

### 到了 IO 操作的时候, 将线程中的任务进行切换, 切换成非 IO 操作. 等

### 原来的 IO 执行完了. 再恢复回原来的任务中.

束形成了这样一种模型, 在程序遇到了 IO 操作 (费时不费力的操作) 时，

自动切换到其他任务. 该模型被称为协程.

## 协程的基本写法: 咱就介绍一种, 也是最好用的一种, 如果各位想看更

### 加详细, 细致的协程推导过程, 可以再等等 ~~ 未来鄙人会推出更详细

### 的多任务系列教程 ~.

### 先上手来一下.

```python
async def func():
```

```python
async def funci(d):
```

printC"funcl, start")

```python
await asyncio.sleep(3)
```

printC"funcl, end")

```python
async def func2(Q):
```

printC"func2, start")

```python
await asyncio.sleep(4)
```

printC"func2, end")

```python
async def func3Q):
```

printC"func3, start")

```python
await asyncio.sleep(2)
```

printC"func3, end")

```python
if __name__ == '__main__':
    start = time.time()
    tasks = [# 协程任务列表
```

funcl1Q), # 创建协程任务

```python
func2(),
func3()
```

]

```python
Lop = asyncio.get_event_Loop()
```

```python
   # 我要执行这个协程任务列表中的所有任务
   Lop. run_until_completeCasyncio.wait(Ctasks))
# 我要执行这个协程任务列表中的所有任务
```

printCtime.timeC) - start)

妙不妙 ~~

### 上面的程序还可以与成这样

```python
async def main():
```

printC'start")

```python
# # 添加协程任务
# t1 = qsyncio.create_task(func1(CD7 7)
# t2 = asyncio.create_task(func2())
# t3 = asyncio.create_task(func3())
#
# Pet1 = await t1
# ret2 = await 七 2
# ret3 = await t3
```

```python
tasks = [
```

funcid),

```python
func2(),
```

func3Q

]

```python
# 一次性把所有任务都执行
```

```python
done, pedding = await asyncio.wait(tasks)
```

printC"end")

```python
if __name__ == '__main__':
    start = time.time()
    asyncio.run(main())
```

printCtime.timeC) - start)

```python
async def download(url):
```

```python
http://www.h.com,
```

]

```python
# 生成任务列表
tasks = [downloadCurl) for url in urls]
done, pedding = await asyncio.wait(tasks)
for d in done:
```

printCd.resultQ))

```python
if __name__ == '__main__':
    asyncio.run(main())
```
