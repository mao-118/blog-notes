# 中间件

## 统一处理逻辑

使用中间件为每个请求前后添加统一的处理逻辑。

1. 多个接口都需要验证用户身份。
2. 多个接口都需要记录日志、性能数据。

## 应用场景

- 日志记录
- 身份认证
- 跨域处理
- 响应头处理
- 性能监控

## 中间件的概念

中间件（Middleware）是一个在每次请求进入 FastAPI 应用时都会被执行的函数。

中间件可以在请求到达路径操作（路由处理函数）之前处理请求，也可以在获得响应后、返回客户端之前处理响应。前置处理与后置处理位于同一个函数中，以 `await call_next(request)` 为分界。

## 定义中间件

中间件：函数的顶部使用装饰器 `@app.middleware("http")`。

```python
@app.middleware("http")
async def middleware(request, call_next):
  print('中间件开始处理 -- start')
  response = await call_next(request)
  print('中间件处理完成 -- end')
  return response
```

- `request`：请求。
- `call_next`：将请求传给下一层中间件或路径处理函数，并返回后续处理产生的响应。

## 多个中间件的执行顺序

当你使用 `@app.middleware()` 装饰器或 `app.add_middleware()` 方法添加多个中间件时，每个新中间件都会包裹应用，形成一个栈。最后添加的中间件是“最外层”的，最先添加的是“最内层”的。

在请求路径上，最外层的中间件先运行。

在响应路径上，它最后运行。

例如：

```python
app.add_middleware(MiddlewareA)
app.add_middleware(MiddlewareB)
```

这会产生如下执行顺序：

- **请求**：MiddlewareB → MiddlewareA → 路由
- **响应**：路由 → MiddlewareA → MiddlewareB

这种栈式行为确保中间件按可预测且可控的顺序执行。

参考：[FastAPI 官方文档：中间件](https://fastapi.tiangolo.com/zh/tutorial/middleware/#before-and-after-the-response)。
