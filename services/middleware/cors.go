package middleware

import (
	"github.com/startracex/goup"
	"log"
)

var DefaultCors = goup.CorsConfig{
	AllowOrigin:  []string{"*"},
	AllowMethod:  []string{"*"},
	AllowHeaders: []string{"*"},
}

// SetCors added in new version
func SetCors(c goup.CorsConfig) goup.HandlerFunc {
	return goup.SetCors(c)
}

// Cors added in new version
func Cors(s ...string) goup.HandlerFunc {
	return goup.Cors(s...)
}

func Logger() goup.HandlerFunc {
	return goup.Logger(log.Ltime)
}

func Recovery() goup.HandlerFunc {
	return goup.Recovery()
}
