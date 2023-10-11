package handler

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/database"
	"goupapp/internal/model"
)

func Register(req goup.Request, res goup.Response) {
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
	//	User exist
	if len(result) != 0 {
		res.Status(409)
		return
	}
	// ok:	User does not exist
	database.MongoAccount.Add(map[string]string{
		"email":    usr.Email,
		"password": usr.Password,
	})

	/*
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

		res.JSON(map[string]string{
			"token": token,
		})
	*/
	res.Status(200)
}
