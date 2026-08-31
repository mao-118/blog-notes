# 综合训练-抓取网易云音乐

### 一一 <a 一:一

### 抓取网易云音乐评论信息

```python
# 工， 找到未加密的参数 #
#2. 想办法把参数进行加密 (必须参考网易的逻辑) params
=> encText, encSecKey => encSecKey
#3. 请求到网易. 拿到评论信息
# 需要安装 pycrypto: pip install pycrypto
from Crypto.Cipher import AES
from base64 import b64encode
import requests
import json
```

```python
url =
```

```python
# 请求方式是 POST
data = {
```

csrf_token:,

cursor: -1,

offset: Q,

orderType: 1,

pageNo: 1,

pageSize: 20,

threadId: R_SO_4_1325905146

}

```python
# 服务于 d 的
f =
```

```python
g = OCojJUmM6Qyw8W8jud
e = 010001
i = dSbpgMn9byrHNtAh # 手动固定的. -> 人家函数中
```

是随机的

```python
def get_encSecKey(): # 由于 i 是固定的.那么
```

encSecText 就是固定的. <c(CD7 函数的结果就是固定的

```python
return
```

```python
# 把参数进行加密
def get_paramsCdata): # 默认这里接收到的是字符串
    first = enc_params(Cdata, g)
    second = enc_params(first, i)
    return second # 返回的就是 params
```

```python
# 转化成 16 的倍数， 位下方的加密算法服务
def to_16(Cdata):
    pad = 16 - len(Cdata) % 16
    data += chr(pad) * pad
    return data
```

```python
# 加密过程
def enc_paramsCdata, key):
    iv = 0102030405060708
```

```python
    data = to_16Cdata)
    aes = AES.new(key=key.encode("utf-8"),
IV=iv.encode('utf-8'), mode=AES.MODE_CBC) # 创
```

### 建加密器

```python
bs = aes.encrypt(Cdata.encode("utf-8")) # 加
```

### 密， 加密的内容的长度必须是 16 的倍数

```python
return stPCb64encode(Cbs)，"utf-8") # 转化成
```

### 字符串返回，

```python
# 处理加密过程
```

```python
function aCa = 16) {# 随机的 16 位字符串
    var d, e, b=
```

```python
           c=;
for (d=0@; a>d; d+=1) # 循环 16 次
    e = Math.random() * b.length, # 随
```

机数 1.2345

```python
e = Math.floor(e), # 取整 1
c += b.charAt(e); # 去字符串中的 XXX 位
```

置 b

```python
return <
```

}

function bCa, b) {# q 是要加密的内容，

```javascript
var c = CryptoJS.enc.Utf8.parse(b) # #
```

b 是秘钥

```python
, d=
```

CryptoJS.enc.Utf8&.parseC"@102030405060708")

```python
，e = CryptoJS.enc.Utf8.parse(a) #e
```

是数据

```python
，f = CryptoJS.AES.encryptCe, c, {#
```

c 加密的秘钥

### iv: d, # 偏移量

### mode: CryptoJS.mode.CBC # 模式: cbc

35

```python
return f.toStringQ)
```

}

### function cCa, b, c) {# <c 里面不产生随机数

```python
var d, @;
return setMaxDigits(131),
d = new RSAKeyPair(b,"",c),
e = encryptedString(d, a)
```

}

```python
function d(d, e, f, g) {d: 数据， e:
```

Q10001, f: "RIK, g: 0CoJUm6Qyw8W8jud

```javascript
var h = {} # BYR
  , 1 = ale); # itte—P1OfZHaNVE, 2
```

设置成定值

```python
h.encText = b(d, g) # g 秘角
```

## params ii 也是秘钥

```python
h.encText = b(h.encText, i) # 返回的就是
```

```python
h.encSecKey = c(i, e, f) # 得到的就是
```

### encSeckey，e 和 f 是定死的,如果此时我把 1 固定， 得到的 key

### 一定是固定的

```python
return h
```

}

### 两次加密:

```python
数据 +g => b => 第一次加密 +1 => b = params
```

```python
# 发送请求. 得到评论结果
resp = requests.post(url, data={
    params: get_params(json.dumps(Cdata)),
    encSecKey: get_encSecKey()
```

})
