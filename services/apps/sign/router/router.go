package router

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/handler"
	"goupapp/middleware"
)

func Init(engine *goup.Engine) {
	engine.OPTIONS("/register", middleware.Cors())
	engine.OPTIONS("/login", middleware.Cors())
	engine.OPTIONS("/auth", middleware.Cors())

	engine.POST("/register", handler.Register)
	engine.POST("/login", handler.Login)
	engine.POST("/auth", handler.Auth)

	engine.GET("/api", apiwap)
	api := engine.Group("/api", middleware.Cors())
	ApiRoute(api)
}
