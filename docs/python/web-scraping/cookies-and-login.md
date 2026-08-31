# 处理cookie,模拟登录

## 处理 cookie. 模拟登录

- 二上

### 抓取自己收藏到书架上的小说信息

```python
import requests
# 建立 session
session = requests.session()
# 准备用户名密码
data = {
```

LoginName: 18614075987,

password: "XXXXXX"

}

```python
# UA
headers = {
```

}

```python
# 登录
```

```python
resp =
session.post("https://passport.17k.com/ck/user/Lo
gin", data=data, headers=headers)
# cookie 中的东西
print(Csession.cookies)
# 带着 cookie 请求书架
resp =
session.get("https://user.17k.com/ck/author/shelLf
```
