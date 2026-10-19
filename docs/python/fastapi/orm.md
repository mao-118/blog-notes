# ORM

## ORM 简介

ORM（Object-RelationalMapping，对象关系映射）是一种编程技术，用于在面向对象编程语言和关系型数据库之间建立映射。它允许开发者通过操作对象的方式与数据库进行交互，而无需直接编写复杂的 SQL 语句。

优势：

- 减少重复的 SQL 代码
- 代码更简洁易读
- 自动处理数据库连接和事务
- 自动防止 SQL 注入攻击

## ORM 分类

| 排名 | ORM 工具 | 特点 | 适应场景 |
| --- | --- | --- | --- |
| 1 | SQLAlchemy ORM | 功能最强、最灵活、企业级 | 各类 API、微服务、数据应用 |
| 2 | Django ORM | 封装好、上手快 | Django 项目、管理后台 |
| 3 | Tortoise ORM | 全异步 | 异步 Web 服务、高并发 API |

## ORM 使用流程

1. 安装：`sqlalchemy[asyncio]`、`aiomysql`（异步数据库驱动）。
2. 建库、建表：`run_sync(Base.metadata.create_all)`。
3. 操作数据：查询、新增、修改、删除。

## 建库、建表

### 创建数据库

```sql
create database xx;
```

### 建表流程

创建数据库引擎 → 定义模型类 → 启动应用时建表。

### 创建数据库引擎

使用 `create_async_engine` 创建异步引擎。

```python
from sqlalchemy.ext.asyncio import create_async_engine

ASYNC_DATABASE_URL = "mysql+aiomysql://root:123456@localhost:3306/fastapi_test?charset=utf8"
# 创建异步引擎
async_engine = create_async_engine(
    ASYNC_DATABASE_URL,
    echo=True,       # 可选：输出SQL日志
    pool_size=10,    # 设置连接池中保持的持久连接数
    max_overflow=20  # 设置连接池允许创建的额外连接数
)
```

### 定义模型类

1. 基类，继承 `DeclarativeBase`（包含通用属性和字段的映射）。
2. 定义数据库表对应的模型类。

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

### 创建数据库表

1. 从连接池获取异步连接，开启事务，执行 ORM 操作。
2. FastAPI 应用启动时，创建数据库表。

```python
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.on_event("startup")
async def startup_event():
    await create_tables()
```

## 路由匹配中使用 ORM

![搜索与注册中的数据库操作场景](assets/orm/route-database-examples.png)

核心：创建依赖项，使用 `Depends` 注入到处理函数。

```python
# 创建异步会话工厂
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,  # 绑定数据库引擎
    class_=AsyncSession,  # 指定会话类
    expire_on_commit=False  # 会话对象不过期，不重新查询数据库
)
# 依赖项，用于获取数据库会话
async def get_database():
    async with AsyncSessionLocal() as session:
        try:
            yield session  # 返回数据库会话给路由处理函数
            await session.commit()  # 无异常，提交事务
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

## 数据库操作

| 操作 | 方法 |
| --- | --- |
| 查询 | `select()` |
| 新增 | `add()` |
| 更新 | 先查再改（重新赋值） |
| 删除 | `delete()` |

### 查询

核心语句：`await db.execute(select(模型类))`，返回一个 ORM 对象。

#### 获取所有数据

`scalars().all()`。

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession=Depends(get_database)):
    result = await db.execute(select(Book))
    book = result.scalars().all()
    return book
```

#### 获取单条数据

- `scalars().first()`
- `get(模型类, 主键值)`

```python
@app.get("/book/get_book")
async def get_book(db: AsyncSession=Depends(get_database)):
    # result = await db.execute(select(Book))
    # book=result.scalars().first()
    book = await db.get(Book, 1)
    return book
```

### 查询条件

```python
select(Book).where(条件, 条件2, ...)
```

条件：

- 比较判断：`==`、`>`、`<`、`>=`、`<=` 等。
- 模糊查询：`like()`。
- 与非查询：`&`、`|`、`~`。
- 包含查询：`in_()`。

#### 比较判断

比较判断：`==`、`>`、`<`、`>=`、`<=` 等。

```python
@app.get("/book/{book_id}")
async def get_book_list(book_id: int, db: AsyncSession = Depends(get_database)):
    result = await db.execute(select(Book).where(Book.id == book_id))
    book = result.scalar_one_or_none()
    return book
```

#### 模糊查询

模糊查询：`like()`。

- `%`：零个、一个或多个字符。
- `_`：一个单个字符。

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
    result = await db.execute(select(Book).where(Book.author.like("曹%")))
    book = result.scalars().all()
    return book
```

#### 与非查询

- `&`：与
- `|`：或
- `~`：非

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
    result = await db.execute(select(Book).where((Book.author == "曹雪芹") & (Book.price == 200)))
    book = result.scalars().all()
    return book
```

#### 包含查询

包含查询：`in_()`。

```python
@app.get("/book/get_books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
    id_list = [1, 2, 3, 4, 5, 6]
    result = await db.execute(select(Book).where(Book.id.in_(id_list)))
    book = result.scalars().all()
    return book
```

### 聚合查询

聚合计算：`func.方法(模型类.属性)`。

- `count`：统计行数量
- `avg`：求平均值
- `max`：求最大值
- `min`：求最小值
- `sum`：求和

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

### 分页查询

分页查询：`select().offset().limit()`。

- `offset`：跳过的记录数。
- `limit`：返回的记录数。

| 当前页码 | 每页数量（limit） | 跳过数量（offset） |
| --- | --- | --- |
| 1 | 10 | 0 |
| 2 | 10 | 10 |
| 3 | 10 | 20 |
| 4 | 10 | 30 |

`offset` 值 =（当前页码 - 1）× 每页数量 `limit`。

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

### 新增

核心步骤：定义 ORM 对象 → 添加对象到事务：`add(对象)` → `commit` 提交到数据库。

```python
@app.post("/book/add_book")
async def add_book(book: BookBase, db: AsyncSession = Depends(get_database)):
    # 获取 book 参数，创建图书对象（__dict__ 返回 book 对象的属性字典）
    book_obj = Book(**book.__dict__)
    db.add(book_obj)
    await db.commit()
    return book
```

### 更新

核心步骤：查询 `get` → 属性重新赋值 → `commit` 提交到数据库。

```python
@app.put("/book/update_book/{book_id}")
async def update_book(book_id: int, data: BookUpdate, db: AsyncSession = Depends(get_database)):
    # 1. 查询
    book = await db.get(Book, book_id)
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    # 2. 修改属性（重新赋值）
    book.bookname = data.bookname
    book.author = data.author
    book.price = data.price
    # 3. 提交
    await db.commit()
    return book
```

### 删除

核心步骤：查询 `get` → `delete` 删除 → `commit` 提交到数据库。

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
