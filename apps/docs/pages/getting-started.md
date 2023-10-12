# 快速开始

## 设置域名配置

apps/reverse-server是一个反代服务器, 他现在具有这些反代规则

```txt
  example.com/ => localhost:3000
  docs.example.com/ => localhost:3001
  login.example.com/ => localhost:9527
```

将BaseURL之前的域名和指向的地址添加入hosts

```txt
  127.0.0.1		example.com
  127.0.0.1		login.example.com
  127.0.0.1		docs.example.com
```

现在运行`apps/reverse-server/main.go`, Goup将按照规则执行反代服务. 参阅 [此处](https://github.com/startracex/goup/reverse)

## 设置数据库连接地址

### 数据库连接

`apps/sign` 需要Mongodb与Redis, 它们的链接设置位于`databases/instanses.go`

`apps/web` 需要PostgreSQL.也可更换为MySQL, SqlServer, SQLite. 它的连接配置位于`prisma/schema.prisma` (参阅 [Prisma](https://pris.ly/d/prisma-schema))

