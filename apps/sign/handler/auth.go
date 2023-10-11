package handler

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/conf"
	"goupapp/apps/sign/database"
	"goupapp/internal/jwt"
	"goupapp/internal/utils"
)

func Auth(req goup.Request, res goup.Response) {
	authorization := req.GetHeader("Authorization")
	if authorization == "" {
		res.Status(401)
		return
	}
	// get token string
	tokenString := utils.GetStringAfter(authorization, "Bearer", 1)
	if tokenString == "" {
		res.Status(401)
		return
	}
	token, err := jwt.Parse(tokenString, conf.JWTKEY)
	if err != nil {
		res.Status(500)
		return
	}
	// get _id
	_id, ok := jwt.GetString(token, "_id")
	if !ok {
		res.Status(500)
		return
	}
	randomKey := utils.GenUUID()
	randomMid := utils.GenUUID()
	database.RedisCodeMap.Set(randomKey, randomMid, 300)
	database.RedisTokenMap.Set(randomMid, _id, 6000)
	res.JSON(map[string]string{
		"code": randomKey,
	})
}
