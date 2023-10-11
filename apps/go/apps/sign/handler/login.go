package handler

import (
	"goupapp/apps/sign/conf"
	"goupapp/apps/sign/database"
	"goupapp/lib/jwt"
	"goupapp/model"
	"github.com/startracex/goup"
)

func Login(req goup.Request, res goup.Response) {
	usr, ok := model.BindUserLoginInput(req)
	if !ok {
		res.WriteHeader(400)
		return
	}
	// Check if exist by email, password
	result := database.MongoAccount.Find(map[string]string{
		"email":    usr.Email,
		"password": usr.Password,
	})
	//	User does not exist
	if len(result) == 0 {
		res.Status(404)
		return
	}
	// ok:	User exist
	claims := jwt.JWT(map[string]any{
		"email": result["email"],
		"_id":   result["_id"],
	})
	// Sign token
	token, err := jwt.Sign256(claims, conf.JWTKEY)
	if err != nil {
		res.Status(500)
		return
	}

	res.Status(200)
	res.JSON(map[string]string{
		"token": token,
	})
}
