# MySQL概述

## 1\.数据库相关概念

**数据库（DB）**：按照一定的数据结构来组织、存储和管理数据的仓库

**数据库管理系统\(DBMS\)**：一种操纵和管理数据库的大型软件，用于创建、使用和维护数据库

**关系型数据库（RDBMS）**：由多张相互连接的二维表组成的数据库

**非关系型数据库**：泛指非关系型数据库，是对关系型数据库的补充

**结构化查询语言（SQL）**：一种操作关系型数据库的编程语言，定义了一套操作关系型数据库统一SQL标准

## 2\.MySQL数据库概述

### 2\.1 安装和卸载

下载地址：

[https://dev.mysql.com/downloads/windows/installer/8.0.html](https://dev.mysql.com/downloads/windows/installer/8.0.html)

Windows安装和下载MySQL参考如下资料即可：

[MySQL安装\.pdf](assets/MySQL安装.pdf)

[MySQL卸载文档\-Windows版\.pdf](assets/MySQL卸载文档-Windows版.pdf)

Linux系统安装MySQL软件的操作可以参考下面这个资料：

[Linux软件安装\-MySQL\.pdf](assets/Linux软件安装-MySQL.pdf)

### 2\.2 启动与停止

1\.管理员连接（以管理员方式打开命令行窗口）：

启动：`net start mysql80`

停止：`net stop mysql80`

- 默认mysql是开机自动启动的

2\.客户端连接：

方式一：开始菜单找到MySQL提供的客户端命令行工具`MySQL 8.0 Command Line Client`

方式二：系统自带的命令行工具执行指令`mysql [-h 127.0.0.1] [-P 3306] -u root -p`

- 方式二需要配置环境变量`C:\Program Files\MySQL\MySQL Server 8.0\bin\`
