# 依赖注入

## 共享通用逻辑

使用依赖注入系统来共享通用逻辑，减少代码重复。

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
@app.get("/users/user_list")
async def get_user_list(
  skip: int = Query(0, ge=0),
  limit: int = Query(10, le=60)
):
  # 分页逻辑...
  return {"users": "用户列表"}
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

## 中间件与依赖注入

| 对比 | 控制谁？ |
| --- | --- |
| 中间件 | Everyone |
| 依赖注入 | 我说了算~ |

## 依赖项与注入

使用依赖注入系统来共享通用逻辑，避免代码重复。

依赖项：可重用的组件（函数/类），负责提供某种功能或数据。

注入：FastAPI 自动帮你调用依赖项，并将结果“注入”到路径操作函数中。

### 优点

- 代码复用：一次编写，多处使用。
- 解耦：业务逻辑与基础设施代码分离。
- 易于测试：轻松地用模拟依赖替换真实依赖进行测试。

## 依赖注入应用场景

| 应用场景 | 说明 |
| --- | --- |
| 处理请求参数 | 从请求中提取和验证参数（路径参数、查询参数、请求体） |
| 共享业务逻辑 | 抽取封装多个路由公用的逻辑代码 |
| 共享数据库连接 | 管理数据库会话的创建、使用、关闭 |
| 安全和认证 | 验证用户身份、检查权限和角色要求等 |

## 使用依赖注入

创建依赖项 → 导入 Depends → 声明依赖项。

### 创建依赖项

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

### 导入 Depends

```python
from fastapi import Depends
```

### 声明依赖项

```python
@app.get("news/news_list'")
async def get_news_list(
  commons = Depends(common_parameters)
):
  return commons
```
