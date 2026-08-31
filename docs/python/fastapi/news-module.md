# AI掘金头条-新闻模块

## 项目概述

![课件图示](assets/news-module/page-02.png)

![课件图示](assets/news-module/page-03.png)

项目根目录打开终端

```python
1.
2. npm run dev
```

运行构建工具

```python
Vite/Webpack
```

开启开发服务器、编译代码

## 工程结构

![课件图示](assets/news-module/page-05.png)

## 模块化路由

路由层按模块划分

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

模块化路由就是把每个业务功能的接口拆分到独立文件里再统一挂载到主应用中。

接口按模块拆分不会混在一

把接口拆分出去后 main.py

每个模块都负责自己对应的接

起让整个项目结构更直观

就只负责启动应用不再堆满

口便于快速查找和定向修改

业务代码

项目结构更清晰

避免 main.py 爆炸

更易维护

![课件图示](assets/news-module/page-09.png)

什么是模块化路由有什么优势

优势项目结构更清晰、项目更易维护

说出下方代码的含义

```python
from fastapi import APIRouter
# 创建 APIRouter 实例
router = APIRouter(prefix="/api/news",tags=["news"])
@router.get("/categories")
async def get_categories():
  return {"msg": "获取分类成功"}
```

如何注册路由

在

中添加

```python
main.py
```

```python
from fastapi import APIRouter
router = APIRouter(prefix="/api/news",tags=["news"])
@router.get("/xx")
async def xx_xx():
  1. 数据库操作 增、删、改、查
  2. 响应结果
```

操作数据

建库

配置

```python
ORM
```

## 配置ORM

![课件图示](assets/news-module/page-12.png)

![课件图示](assets/news-module/page-13.png)

```python
from sqlalchemy.ext.asyncio import async_sessionmaker, AsyncSession, create_async_engine
# 数据库URL
ASYNC_DATABASE_URL = "mysql+aiomysql://root:123456@localhost:3306/news_app?charset=utf8mb4"
# 创建异步引擎
async_engine = create_async_engine(ASYNC_DATABASE_URL,echo=True, pool_size=10, max_overflow=20)
AsyncSessionLocal = async_sessionmaker(
  bind=async_engine,
  class_=AsyncSession,
  expire_on_commit=False
)
# 依赖项 用于获取数据库会话
async def get_db():
  async with AsyncSessionLocal() as session:
    try:
      yield session
      await session.commit()
    except Exception:
      await session.rollback()
      raise
    finally:
      await session.close()
```

## 新闻模块

![课件图示](assets/news-module/page-15.png)

### 获取新闻分类

![课件图示](assets/news-module/page-17.png)

```python
router = APIRouter(prefix="/api/news", tags=["news"])
@router.get("/categories")
async def get_categories(skip: int=0, limit: int=100):
  return {
    "code": 200,
    "message": "success",
    "data": "新闻分类列表"
   }
```

模块化

数据库

路由调用

定义

路由

CRUD

逻辑

模型类

实

注入数

```python
   select(
   add()
update()
   delete()
```

```python
       APIRouter
注册路由
   include_router()
```

```python
class Base(DeclarativeBase):
  pass
class Category(Base):
  __tablename__="news_category"
  ......
```

例

据库依赖调用逻辑响应结果

参照接口规范文档

参照数据库表

![课件图示](assets/news-module/page-20.png)

### 跨域资源共享CORS

![课件图示](assets/news-module/page-21.png)

![课件图示](assets/news-module/page-22.png)

CORS 让后端主动告诉浏览器这个前端“允许访问”。

```python
from fastapi.middleware.cors import CORSMiddleware
# 允许的来源 可以是域名列表
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

![课件图示](assets/news-module/page-24.png)

### 获取新闻列表

```python
@router.get("/list")
async def get_news(
    category_id: int = Query(..., alias="categoryId"),
    page: int = 1,
    page_size: int = Query(10, le=100, alias="pageSize")
):
  return {
    "code": 200,
    "message": "success",
    "data": {
      "list": "news_list",
      "total": "total_count",
      "hasMore": "has_more"
     }
   }
```

![课件图示](assets/news-module/page-26.png)

### 获取新闻详情

![课件图示](assets/news-module/page-27.png)

```python
@router.get("/detail")
async def read_news_detail(news_id: int=Query(..., alias="id")):
  return {
    "code": 200,
    "message": "success",
    "data": {
      "id": "新闻id",
      "title": "新闻标题",
      "content": "",
       ......
      "relatedNews": "相关新闻"
    }
  }
```

![课件图示](assets/news-module/page-29.png)

![课件图示](assets/news-module/page-30.png)

## 本章总结

![课件图示](assets/news-module/page-32.png)

![课件图示](assets/news-module/page-33.png)

模块化路由

```python
from fastapi import APIRouter
# 创建 APIRouter 实例
router = APIRouter(prefix="/api/news",tags=["news"])
@router.get("/categories")
async def get_categories():
  return {"msg": "获取分类成功"}
# main.py 注册路由
app.include_router(news.router)
```

![课件图示](assets/news-module/page-35.png)

跨域资源共享 CORS 是一种浏览器安全机制用于允许运行在一个源 Origin 的 Web 应用通过浏览器向

另一个源的服务器发起跨域 HTTP 请求并在服务器授权的前提下获取资源。

```python
from fastapi.middleware.cors import CORSMiddleware
# 允许的来源 可以是域名列表
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
```

同源的三个条件

协议

域名

端口

模型类中如何为字段创建索引

```python
class News(Base):
 ......
 # 创建索引 提升查询速度
 __table_args__= (
   Index('fk_news_category_idx', 'category_id'),
   Index('idx_publish_time', 'publish_time')
)
```

ORM 如何将查询的数据排序

```python
select().order_by(News.views.desc())
        desc()
```

默认升序

表示降序

使用 ORM 修改数据的方法是什么

```python
   update().where().values()
async def increase_news_views(db: AsyncSession, news_id: int):
  stmt = update(News).where(News.id == news_id).values(views=News.views + 1)
  result = await db.execute(stmt)
  await db.commit()
  # 更新 → 检查数据库是否真的命中了数据 → 命中了返回True
  return result.rowcount > 0
```
