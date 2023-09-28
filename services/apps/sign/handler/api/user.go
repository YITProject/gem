package api

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/database"
	"goupapp/lib/db"
	"goupapp/lib/utils"
)

func User(req goup.Request, res goup.Response) {
	authorization := req.GetHeader("Authorization")
	if authorization == "" {
		res.Status(401)
		return
	}
	//var tokenString string
	tokenString := utils.GetStringAfter(authorization, "Bearer", 1)
	if tokenString == "" {
		res.Status(401)
		return
	}
	_id, err := database.RedisTokenMap.Get(tokenString)
	if err != nil {
		res.Status(404)
		return
	}
	result := database.MongoAccount.Find(map[string]any{
		"_id": db.ToObjectID(_id),
	})
	res.JSON(map[string]any{
		"_id":   _id,
		"email": result["email"],
	})
	res.Status(200)
}
