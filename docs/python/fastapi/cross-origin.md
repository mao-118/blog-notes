# 跨域

## 跨域资源共享 CORS

跨域资源共享（CORS）是一种浏览器安全机制，用于允许运行在一个源（Origin）的 Web 应用，通过浏览器向另一个源的服务器发起跨域 HTTP 请求，并在服务器授权的前提下获取资源。

### 同源的三个条件

- 协议
- 域名
- 端口

| 前端 | 后端 | 是否跨域 |
| --- | --- | --- |
| `http://localhost:5173` | `http://localhost:8000` | 跨域 |
| `http://example.com` | `http://api.example.com` | 跨域 |
| `http://example.com` | `http://example.com` | 不跨域 |

## 跨域请求示意

| 端 | 技术 | 地址 |
| --- | --- | --- |
| 前端 | Vue | `http://localhost:5173/` |
| 后端 | FastAPI | `http://127.0.0.1:8000/` |

## CORS 中间件

CORS：让后端主动告诉浏览器：这个前端“允许访问”。

```python
from fastapi.middleware.cors import CORSMiddleware

# 允许的来源（可以是域名列表）
origins = [
  "http://localhost",
  "http://localhost:3000",
  "https://your-frontend-domain.com"
]

# 添加 CORS 中间件
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],     # 允许访问的源
  allow_credentials=True,  # 允许携带 Cookie
  allow_methods=["*"],     # 允许所有请求方法
  allow_headers=["*"],     # 允许所有请求头
)
```
