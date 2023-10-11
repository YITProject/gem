package main

import (
	"github.com/startracex/goup/reverse"
	"net/url"
)

func main() {
	r := reverse.New()
	defer r.Run()

	/*
		Add these hosts in local
		 * @see https://github.com/startracex/goup/reverse

		127.0.0.1		example.com
		127.0.0.1		login.example.com
		127.0.0.1		docs.example.com

	*/

	r.Add(&reverse.Forward{
		Form: &url.URL{
			Host: "example.com",
		},
		Target: &url.URL{
			Host: "localhost:3000",
		},
	})

	r.Add(&reverse.Forward{
		Form: &url.URL{
			Host: "docs.example.com",
		},
		Target: &url.URL{
			Host: "localhost:3001",
		},
	})
	
	r.Add(&reverse.Forward{
		Form: &url.URL{
			Host: "login.example.com",
		},
		Target: &url.URL{
			Host: "localhost:9527",
		},
	})

}
