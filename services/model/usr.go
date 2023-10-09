package model

import (
	"github.com/startracex/goup"
	"goupapp/lib/utils"
	"strings"
)

type User struct {
	UserLogin
}

type UserLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (u *UserLogin) CheckEmail() bool {
	return utils.CheckEmail(u.Email)
}

func (u *UserLogin) CheckPassword() bool {
	return utils.CheckPassword(u.Password)
}

func BindUserLoginInput(req goup.Request) (*UserLogin, bool) {
	data := &UserLogin{}
	err := req.JSON(&data)
	if err != nil {
		return nil, false
	}
	if data.Email == "" || data.Password == "" {
		return nil, false
	}
	data.Email = strings.ToLower(data.Email)
	if data.CheckEmail() && data.CheckPassword() {
		return data, true
	}
	return nil, false
}
