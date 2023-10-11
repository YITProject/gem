package api

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/conf"
	"goupapp/apps/sign/database"
	"goupapp/internal/db"
	"goupapp/internal/jwt"
	"goupapp/internal/utils"
)

func User(req goup.Request, res goup.Response) {
	// from jwt
	authorization := req.GetHeader("Authorization")
	if authorization != "" {
		tokenString := utils.GetStringAfter(authorization, "Bearer", 1)
		token, err := jwt.Parse(tokenString, conf.JWTKEY)
		if err != nil {
			res.Status(500)
			return
		}
		_id, ok := jwt.GetString(token, "_id")
		if !ok {
			res.Status(500)
			return
		}
		email := jwt.GetMust(token, "email")
		res.JSON(map[string]any{
			"_id":   _id,
			"email": email,
		})
	} else {
		tokenString := req.GetHeader("Token")
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
	}
}
