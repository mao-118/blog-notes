# 扒光一本电子书

## 扒 2 一本电子书

### ARJ/LF, 早点儿散. 直接上.

### 目标: 百度小说 -> 西游记

### 代码:

```python
import asyncio
import aiohttp
import requests
import json
```

```python
async def download(gid, cid, title, session):
    params = {
```

| book_id: gid,

cid: f"{gid}l{cid}",

need_bookinfo: 1

了

```python
    url =
f"http://dushu.baidu.com/api/pc/get(hapterContent
?data={json.dumps(params)}"
```

async with session.getCurLl) as resp:

```python
        dic = await resp. json(c)
        with open(f"novel/{titLle}.txt", mode="w",
encoding="utf-8") as f:
```

f.writeCdic['data']['novel']

['content'].replaceC"\n",))

```python
return f"{title}, OK!"
```

```python
async def main():
    # 准备首页 Url
    gid = 4306063500 # 百度小说的书籍 1d
    url =
f'http://dushu.baidu.com/api/pc/get(atalog?data=
    # 此时还没有其他任务会和该任务一起并行执行. 所以完全
```

没必要用异步 ~

```python
resp = requests.get(urlL)
dic = resp.json()
tasks = []
async with aiohttp.ClientSession() as
```

session:

```python
for item in dic['data']["novel"]
```

```python
title = item['title']
cid = item['cid']
```

tasks.appendCdownload(gid, cid,

title, session))

```python
    # 添加异步任务
done, pedding = await asyncio.wait(tasks)
```

```python
for item in done:
    print(item.resuLt(C))
```

```python
if __name__ == '__main__':
    asyncio.run(main())
```

效果:

由第一回灵根育孕源流出心性修持大道生.txt

4A 第一百回径回东土五圣成真.txt

第七十一回行者假名降怪狐观音现象伏妖王.txt

第七十七回群魔欺本性一体拜真如.txt

由第七十三回情因旧恨生灾毒心主遭魔幸破光.txt

B 第七十九回寻洞擒妖因老寿当朝正主救婴儿.txt

第七十二回盘丝洞七情迷本潜垢泉八戒忘形.txt

6B 第七十五回心猿钻透阴阳穿魔王还归大道真.txt

第七十八回 KER Fie 金典识魔谈道德.txt

B 第七十六回心神居舍魔归性木母同降怪体真.txt

第七十四回长庚传报魔头狠行者施为变化能.txt

### 和赴第七十回妖魔宝放烟沙火司空计盗紫侈欠 t

由第七回八卦炉中逃大圣五行山下定心猿.txt

B 第三十一回猪八戒义激猴王孙行者智降妖怪.txt

B 第三十七回鬼王夜刘唐三藏悟空神化引婴儿.txt

B 第三十三回外道迷真性元神助本心.txt

第三十九回一粒金丹天上得三年故主世间生.txt

B 第三十二回平顶山功曹传信 SCARIER. txt

B 第三十五回外道施威欺正性 WRI RAAB. txt

由第三十八回婴儿问母知收正金木参玄见假真.txt

由第三十六回心猿正处诸缘伏 BRST ABA. txt

第三十四回魔王巧算困心猿大圣腾那骗宝贝.txt

B 第三十回 PRR 意马忆心猿.txt

第九十一回 SEAR ZR SRK. txt

B 第九十七回金酬外护遭魔毒圣显幽魂救本原.txt

直第九十三回给孤园问古谈因天竺国朝王遇偶.txt

![扒光一本电子书 - 第4页](assets/ebook-scraping/page-4.png)
