package api

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/database"
)

func Auth(req goup.Request, res goup.Response) {
	code := req.GetQuery("code")
	if code == "" {
		res.Status(400)
		return
	}
	mid, err := database.RedisCodeMap.Get(code)
	if err != nil {
		res.Status(404)
		return
	}
	res.Status(200)
	res.JSON(map[string]string{
		"token": mid,
	})
	database.RedisCodeMap.Del(code)
}
