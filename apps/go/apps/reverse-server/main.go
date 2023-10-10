package main

import (
	"github.com/startracex/goup/reverse"
	"net/url"
)

func main() {
	r := reverse.New()
	r.Add(&reverse.Forward{
		Form: &url.URL{
			Host: "localhost",
		},
		Target: &url.URL{
			Host: "localhost:9527",
		},
	})
	r.Run()
}
