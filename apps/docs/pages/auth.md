# 身份认证

## 登录

Gem 允许使用 email 或命名空间和密码登录, 或是通过[Goup-OAuth](https://github.com/startracex/goupapp/blob/main/apps/sign)登录

Gem 仅将 Password 和 AccessToken 数据库视为私密, 其他均为公开数据

## 令牌

Gem的所有服务都通过JWT(Json Web Token)进行认证支持

在浏览器中将其存放于 `localStorage "TOKEN"`

## 第三方认证

将地址指向 `认证服务器地址/auth?callback_url=回调地址`

Goup-OAuth 会等待用户登录并点击"授权",当授权完成之后,地址将会重定向到 `callback_url` 并附加参数 `code=临时代码`

Gem 将会获取临时代码并向认证中心的 api 发送一个 get 请求,附带临时代码,当认证中心确认代码有效时将会返回用户的个人信息

Gem 再此获取用户信息, 此时可为其执行创建或登录操作
