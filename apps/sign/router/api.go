package router

import (
	"github.com/startracex/goup"
	"goupapp/apps/sign/handler/api"
	"goupapp/internal/middleware"
	"net/http"
)

func ApiRoute(group *goup.RouterGroup) {
	group.OPTIONS("/user", middleware.Cors())
	group.OPTIONS("/auth", middleware.Cors())
	group.GET("/user", api.User)
	group.GET("/auth", api.Auth)
}

func apiwrap(request goup.Request, response goup.Response) {
	http.Redirect(response.Writer, request.OriginalRequest, "/docs", 301)
}
