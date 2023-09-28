# Authorization Application

## Login

`POST /login`

Login action

Return `json web token`

Parameter:

 - Body: E-mail, password

## Register

`POST /register`

Register action

Parameter:

 - Body: E-mail, password

## Authorization

`POST /auth`

Return `authorization code`

Parameter:

 - Header:

    - Authorization: `Bearer ${json web token}`

## Application programming interface

`GET /api/auth`

Return `temporary token`

Query: 
  + code: `authorization code`

`GET /api/user`

Return `user information`

Parameter:

 - Header:

    - Token: `temporary token`
    - Authorization: `Bearer ${json web token}`
