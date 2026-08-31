# FastAPI 进阶

## 中间件

多个接口

都需要验证用户身份

都需要记录日志、性能数据

![课件图示](assets/advanced/page-03.png)

![课件图示](assets/advanced/page-04.png)

中间件函数的顶部使用装饰器 @app.middleware("http")

请求

传递请求给路径处理函数

```python
@app.middleware("http")
async def middleware(request, call_next):
  print('中间件开始处理 -- start')
  response = await call_next(request)
  print('中间件处理完成 -- end')
  return response
```

中间件作用是什么

为每个请求添加统一的处理逻辑记录日志、身份认证、跨域、设置响应头、性能监控等

中间件怎么定义

函数的顶部使用装饰器 @app.middleware("http")

多个中间件的执行顺序是

自下而上

## 依赖注入

```python
@app.get("/users/user_list")
async def get_user_list(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  # 分页逻辑...
  return {"users": "用户列表"}
```

```python
@app.get('/news/news_list')
async def get_news_list(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  # 分页逻辑...
  return {"list": "新闻列表"}
```

```python
@app.get("/news/category")
async def get_category(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  # 分页逻辑...
  return {"category": "新闻分类"}
```

![课件图示](assets/advanced/page-08.png)

依赖项可重用的组件函数/类负责提供某种功能或数据。

注入 FastAPI 自动帮你调用依赖项并将结果"注入"到路径操作函数中。

优点

代码复用一次编写多处使用

解耦业务逻辑与基础设施代码分离

易于测试轻松地用模拟依赖替换真实依赖进行测试

![课件图示](assets/advanced/page-11.png)

创建依赖项

```python
async def common_parameters(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  return {
    "skip": skip,
    "limit": limit
  }
```

导入 Depends

```python
from fastapi import Depends
```

声明依赖项

```python
@app.get("news/news_list'")
async def get_news_list(
  commons = Depends(common_parameters)
):
  return commons
```

FastAPI中依赖注入系统有什么用

抽取可复用的组件实现代码复用、解耦且可轻松替换依赖项进行测试

怎么使用依赖注入系统

创建依赖项 → 导入 Depends → 声明依赖项

```python
from fastapi import Depends
async def common_parameters(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  return { "skip": skip, "limit": limit }
@app.get("news/news_list'")
async def get_news_list(
  commons = Depends(common_parameters)
):
  return commons
```

## ORM

ORM Object-RelationalMapping 对象关系映射是一种编程技术用于在面向对象编程语言和关系型数据库之间

建立映射。它允许开发者通过操作对象的方式与数据库进行交互而无需直接编写复杂的SQL语句。

优势

减少重复的 SQL 代码

代码更简洁易读

自动处理数据库连接和事务

自动防止 SQL 注入攻击

### ORM分类

![课件图示](assets/advanced/page-15.png)

### ORM使用流程

![课件图示](assets/advanced/page-16.png)

### ORM建表

![课件图示](assets/advanced/page-18.png)

使用 create_async_engine 创建异步引擎

```python
from sqlalchemy.ext.asyncio import create_async_engine
ASYNC_DATABASE_URL = "mysql+aiomysql://root:123456@localhost:3306/fastapi_test?charset=utf8"
# 创建异步引擎
async_engine = create_async_engine(
  ASYNC_DATABASE_URL,
  echo=True,       # 可选  输出SQL日志
  pool_size=10,    # 设置连接池中保持的持久连接数
  max_overflow=20  # 设置连接池允许创建的额外连接数
)
```

1. 基类继承

包含通用属性和字段的映射

```python
DeclarativeBase
```

2. 定义数据库表对应的模型类

```python
class Base(DeclarativeBase):
  create_time: Mapped[datetime] = mapped_column(
    DateTime, insert_default=func.now(), default=datetime.now, comment="创建时间")
  update_time: Mapped[datetime] = mapped_column(
    DateTime, insert_default=func.now(), onupdate=func.now(), default=datetime.now, comment="修改时间")
class Book(Base):
  __tablename__="book"
  id: Mapped[int] = mapped_column(primary_key=True)
  bookname: Mapped[str] = mapped_column(String(255))
  author: Mapped[str] = mapped_column(String(255))
  ......
```

1. 从连接池获取异步连接开启事务执行 ORM 操作

2. FastAPI 应用启动时创建数据库表

```python
async def create_tables():
  async with async_engine.begin() as conn:
    await conn.run_sync(Base.metadata.create_all)
@app.on_event("startup")
async def startup_event():
  await create_tables()
```

需求使用 SQLAlchemy ORM 创建用户表包含字段如下用户 id、用户名、密码、创建时间、更

新时间

- 用户 id 主键

### 路由中使用ORM

![课件图示](assets/advanced/page-23.png)

核心创建依赖项使用 Depends 注入到处理函数

```python
# 创建异步会话工厂
AsyncSessionLocal = async_sessionmaker(
  bind=async_engine,  # 绑定数据库引擎
  class_=AsyncSession,  # 指定会话类
  expire_on_commit=False  # 会话对象不过期  不重新查询数据库
)
# 依赖项 用于获取数据库会话
async def get_database():
  async with AsyncSessionLocal() as session:
    try:
      yield session  # 返回数据库会话给路由处理函数
      await session.commit()  # 无异常  提交事务
    except Exception:
      await session.rollback()  # 有异常则回滚
      raise
    finally:
      await session.close()  # 关闭会话
```

```python
@app.get("/book/books")
async def get_book_list(
  db: AsyncSession = Depends(get_database)
):
  # 查询所有书籍
  result = await db.execute(select(Book))  # Book 模型类
  user = result.scalars().all()
  return user
```

![课件图示](assets/advanced/page-25.png)

## 数据库操作

![课件图示](assets/advanced/page-26.png)

### 查询

核心语句 await db.execute( select(模型类) ) 返回一个 ORM 对象

获取所有数据

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession=Depends(get_database)):
  result = await db.execute(select(Book))
  book = result.scalars().all()
  return book
```

```python
scalars().all()
```

获取单条数据

```python
@app.get("/book/get_book")
async def get_book(db: AsyncSession=Depends(get_database)):
  # result = await db.execute(select(Book))
  # book=result.scalars().first()
  book = await db.get(Book, 1)
  return book
```

```python
   scalars().first()
get(模型类, 主键值)
```

```python
select(Book).where(条件, 条件2, ...)
```

条件

比较判断 ==; >; <; >=; <= 等

模糊查询 like()

与非查询 &; |; ~

包含查询 in_()

比较判断 ==; >; <; >=; <= 等

```python
@app.get("/book/{book_id}")
async def get_book_list(book_id: int, db: AsyncSession = Depends(get_database)):
  result = await db.execute(select(Book).where(Book.id == book_id))
  book = result.scalar_one_or_none()
  return book
```

条件

比较判断 ==; >; <; >=; <= 等

模糊查询 like()

与非查询 &; |; ~

包含查询 in_()

模糊查询 like()

% 零个、一个或多个字符

_ 一个单个字符

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
  result = await db.execute(select(Book).where(Book.author.like("曹%")))
  book = result.scalars().all()
  return book
```

与非查询

& 与

| 或

~ 非

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
  result = await db.execute(select(Book).where((Book.author == "曹雪芹") & (Book.price == 200)))
  book = result.scalars().all()
  return book
```

包含查询

in_()

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
  id_list = [1, 2, 3, 4, 5, 6]
  result = await db.execute(select(Book).where(Book.id.in_(id_list)))
  book = result.scalars().all()
  return book
```

聚合计算 func.方法(模型类.属性)

```python
@app.get("/book/count")
async def get_count(db: AsyncSession = Depends(get_database)):
  # result = await db.execute(select(func.count(Book.id)))
  # result = await db.execute(select(func.max(Book.price)))
  # result = await db.execute(select(func.sum(Book.price)))
  result = await db.execute(select(func.avg(Book.price)))
  count = result.scalar()
  return count
```

count 统计行数量

avg 求平均值

max 求最大值

min 求最小值

sum 求和

分页查询 select().offset().limit()

offset 跳过的记录数

limit 返回的记录数

```python
@app.get("/book/get_books")
async def get_book_list(
  page: int = 1,
  page_size: int = 3,
  db: AsyncSession = Depends(get_database)
):
  skip = (page-1) * page_size
  stmt = select(Book).offset(skip).limit(page_size)
  result = await db.execute(stmt)
  books = result.scalars().all()
  return {"books": books}
```

当前页码每页数量 limit 跳过数量(offset)

1

10

0

2

3

20

4

30

![课件图示](assets/advanced/page-36.png)

从 ORM 对象获取数据的方式

获取所有数据

获取单条数据

: 提取第一个数据

```python
scalars().first()
scalar_one_or_none()
scalar()
```

: 提取一个或 null

: 提取标量值配合聚合查询使用

- 先查再改重新赋值

```python
select()
```

### 新增

核心步骤定义 ORM 对象 → 添加对象到事务 add(对象) → commit 提交到数据库

```python
@app.post("/book/add_book")
async def add_book(book: BookBase, db: AsyncSession = Depends(get_database)):
  # 获取 book 参数 创建图书对象 __dict__ 返回 book 对象的属性字典
  book_obj = Book(**book.__dict__)
  db.add(book_obj)
  await db.commit()
  return book
```

- 先查再改重新赋值

### 更新

核心步骤查询 get → 属性重新赋值 → commit 提交到数据库

```python
@app.put("/book/update_book/{book_id}")
async def update_book(book_id: int, data: BookUpdate, db: AsyncSession = Depends(get_database)):
  # 1. 查询
  book = await db.get(Book, book_id)
  if book is None:
    raise HTTPException(status_code=404, detail="Book not found")
  # 2. 修改属性 重新赋值
  book.bookname = data.bookname
  book.author = data.author
  book.price = data.price
  # 3. 提交
  await db.commit()
  return book
```

- 先查再改重新赋值

### 删除

核心步骤查询 get → delete 删除 → commit 提交到数据库

```python
@app.delete("/book/delete_book/{book_id}")
async def delete_book(book_id: int, db: AsyncSession = Depends(get_database)):
  db_book = await db.get(Book, book_id)
  if db_book is None:
    raise HTTPException(status_code=404, detail="Book not found")
  await db.delete(db_book)
  await db.commit()
  return {"message": "Book deleted"}
```

![课件图示](assets/advanced/page-47.png)
