# 线程池和进程池

### 2x AE OAL FE)

### 当我们对某些网站内容进行抓取的时候非常容易遇到这样一种情况.

<coe 不安全 | xintadi.com.cn/marketanalysisfO/ist/14203.shtr} * BYUP RFS

- ex | Se

年 1 月 25 日 "农历 "北京 G een sc 要搜索的内 [ares -\ EEC

看这个网站, 我们发现这网站的数据太多了. 有一万多页. 也就对应着

一万多个 url. 那我们设计多线程的时候如果每个 url 对应一个线程就

会产生新问题. 朋友, 你一定要知道. 创建线程本身也是要消耗你的计

算机资源的. 线程不是变魔术变出来的. 那这时我们就可以考虑能不

能重复的使用线程呢? 答案当然可以. 线程池就可以帮你搞定.

线程池工作原理:

![线程池和进程池 - 第1页](assets/thread-and-process-pools/page-1.png)

## 创建一个大池子, 存放固定数量的线程. 然后把我们要执行的任务丢

### 给线程池. 由线程池去分配哪个线程来完成该任务. 其他的事情都不

### 需要你来管. 舒服吧.

### 废话不多说, 上代码

```python
from concurrent. futures import
```

ThreadPoolExecutor, ProcessPoolExecutor

```python
# 线程池
def fnCname):
    for i in range(1000):
```

printCname, 1)

```python
if __name__ == '__main__':
    with ThreadPoolExecutor(1Q) as t:
        for i in range(10Q):
           t.submit(fn, name=f"2272{i}")
```

至于进程池. 就把 ThreadPoolExecutor 更换为 ProcessPoolExecutor

就可以了. 其他一模一样
