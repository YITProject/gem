package main

import (
	"fmt"
	"github.com/startracex/goup"
	"github.com/startracex/goup/toolkit"
	"goupapp/apps/web/conf"
	"goupapp/middleware"
)

func main() {
	fmt.Printf("goup@%s: ", goup.Version)
	engine := goup.New()
	engine.Use(middleware.Logger(), middleware.Recovery())
	engine.LoadHTML(toolkit.WalkFiles("view")...)
	engine.GET("/", func(request goup.Request, response goup.Response) {
		name := request.GetQuery("name")
		if name == "" {
			name = "World"
		}
		response.HTML("index.html", map[string]string{
			"name": name,
		})
	})
	engine.GET("/api", func(request goup.Request, response goup.Response) {
		name := request.GetQuery("name")
		if name == "" {
			name = "World"
		}
		response.JSON(map[string]string{
			"name": name,
		})
	})
	engine.Directory("/public", "public")
	engine.File("/global.css", "public/global.css")
	var err error
	if conf.TLS {
		fmt.Printf("Listen and serve on https://localhost:%s\n", conf.PORT)
		err = engine.ListenAndServe(conf.PORT)
	} else {
		fmt.Printf("Listen and serve on http://localhost:%s\n", conf.PORT)
		err = engine.ListenAndServe(conf.PORT)
	}
	if err != nil {
		fmt.Println(err)
	}
}
