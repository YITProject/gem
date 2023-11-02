## 设置域名配置

apps/reverse-server是一个反代服务器, 它现在具有这些反代规则

```txt
  example.com/ => localhost:3000
  docs.example.com/ => localhost:3001
  login.example.com/ => localhost:9527
```

将BaseURL之前的域名和指向的地址添加入hosts, 如下

```txt
127.0.0.1		example.com
127.0.0.1		login.example.com
127.0.0.1		docs.example.com
```

现在运行`apps/reverse-server/main.go`, goup/reverse 将按照规则执行反代服务. 参阅 [此处](https://github.com/startracex/goup/reverse)

## 设置数据库连接地址

### 迁移数据库

关系型数据库的表定义由Prisma生成

进入含有Prisma的应用程序目录, 并执行下面的命令操作数据库

```sh
pnpm run db:gen #这将生成TypeScript类型文件
pnpm run db:dev #这将迁移数据库, 并生成TypeScript类型文件和数据库迁移sql记录
pnpm run db:reset #这将重置数据库, 并生成TypeScript类型文件
pnpm run db:stdio #这将启动Prisma网页视图
```

### 连接数据库

`apps/sign` 需要Mongodb与Redis, 它们的链接设置位于 `databases/instanses.go`

`apps/web` 需要PostgreSQL.也可更换为MySQL, SqlServer, SQLite. 它的连接配置位于 `prisma/schema.prisma` (参阅 [Prisma](https://pris.ly/d/prisma-schema))
