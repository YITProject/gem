package main

import (
	"fmt"
	"github.com/startracex/goup"
	"goupapp/apps/sign/conf"
	"goupapp/apps/sign/router"
	"goupapp/middleware"
)

func main() {
	fmt.Printf("goup@%s: ", goup.Version)
	engine := goup.New()
	engine.Use(middleware.Recovery(), middleware.SetCors(middleware.DefaultCors))
	engine.GET("/", func(request goup.Request, response goup.Response) {
		panic("p")
		str := "Hello, World!\n"
		fmt.Fprint(response.Writer, str)
		response.Write([]byte(str))
		response.String(str)
	})
	router.Init(engine)
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
