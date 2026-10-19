# 路由模块化

## 工程结构

路由层按模块划分，相关目录如下：

```text
toutiao_backend/
├── routers/
│   ├── news.py
│   └── users.py
└── main.py
```

## 接口示例

```python
@app.get("/users")
def get_users(): ...

@app.post("/users")
def create_user(): ...

@app.get("/news_categories")
def get_categories(): ...

@app.get("/news_list")
def get_news_list(): ...

@app.get("/news_detail")
def get_news_detail(): ...
```

```python
@app.get("/token")
def get_token(): ...

@app.get("/history_list")
def get_list(): ...

@app.get("/favorite_list")
def get_list(): ...

@app.get("/user_list")
def get_user_list(): ...

@app.put("/update_user")
def update_user(): ...
```

## 模块化路由的概念

模块化路由就是把每个业务功能的接口拆分到独立文件里，再统一挂载到主应用中。

### 优势

| 优势 | 说明 |
| --- | --- |
| 项目结构更清晰 | 接口按模块拆分，不会混在一起，让整个项目结构更直观 |
| 更易维护 | 每个模块都负责自己对应的接口，便于快速查找和定向修改 |
| 避免 main.py 爆炸 | 把接口拆分出去后，main.py 就只负责启动应用，不再堆满业务代码 |

## 实现模块化路由

模块化目录结构 → 编写独立路由模块 → 在 main.py 中挂载路由。

### 模块化目录结构

```text
app/
└── routers/
    ├── news.py
    └── users.py
```

### 编写独立路由模块

```python
from fastapi import APIRouter

# 创建 APIRouter 实例
router = APIRouter(prefix="/api/news",tags=["news"])

@router.get("/categories")
async def get_categories():
  return {"msg": "获取分类成功"}
```

### 在 main.py 中挂载路由

```python
app.include_router(news.router)
```
