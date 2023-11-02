# 身份认证

## 登录

gem允许使用email或命名空间和密码登录,或是通过[Goup-auth](https://github.com/startracex/goupapp/blob/main/apps/sign)登录

## 令牌

Gem的所有服务都通过JWT(Json Web Token)进行认证支持

在浏览器中将其存放于`localStorage "TOKEN"`

## 第三方认证

将地址指向`认证服务器地址/auth?callback_url=回调地址`

Goup-auth会等待用户登录并点击"授权",当授权完成之后,地址将会重定向到`callback_url`并附加参数`code=临时代码`

gem将会获取临时代码并向认证中心的api发送一个get请求,附带临时代码,当认证中心确认代码有效时将会返回用户的个人信息

gem再此获取用户信息,此时可为其执行创建或登录操作
