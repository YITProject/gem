package jwt

import (
	"github.com/golang-jwt/jwt/v5"
	"reflect"
	"time"
)

var Exp = 24 * 30 * time.Hour

type MapClaims jwt.MapClaims

// Get result query from token
func Get(token *jwt.Token, query string) (any, bool) {
	claims := token.Claims
	c := claims.(jwt.MapClaims)
	v, y := c[query]
	return v, y
}

// GetMust return result or nil
func GetMust(token *jwt.Token, query string) any {
	v, y := Get(token, query)
	if y {
		return v
	}
	return nil
}

// GetString must get string assertion result
func GetString(token *jwt.Token, query string) (string, bool) {
	v, y := Get(token, query)
	str, ok := v.(string)
	if y && ok {
		return str, true
	} else {
		return "", false
	}
}

func ToJWT(structer any) jwt.MapClaims {
	v := reflect.ValueOf(structer)
	if v.Kind() == reflect.Ptr {
		v = v.Elem()
	}
	t := v.Type()
	mapper := make(map[string]any)
	for i := 0; i < v.NumField(); i++ {
		fi := t.Field(i)
		name := fi.Name
		tag := fi.Tag.Get("json")
		if tag != "" {
			name = tag
		}
		mapper[name] = v.Field(i)
	}
	return JWT(mapper)
}

func JWT(mapper map[string]any) jwt.MapClaims {
	c := jwt.MapClaims{}
	for k, v := range mapper {
		c[k] = v
	}
	if _, y := c["iss"]; !y {
		c["iss"] = "127.0.0.1"
	}
	if _, y := c["iad"]; !y {
		c["iad"] = time.Now().Unix()
	}
	if _, y := c["exp"]; !y {
		c["exp"] = time.Now().Add(Exp).Unix()
	}
	return c
}

func Parse(tokenString string, key any) (*jwt.Token, error) {
	if str, y := key.(string); y {
		key = []byte(str)
	}
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return key, nil
	})
	if err != nil {
		return nil, err
	}
	return token, nil
}

func Sign(token *jwt.Token, key any) (string, error) {
	if str, y := key.(string); y {
		key = []byte(str)
	}
	return token.SignedString(key)
}

func Sign256(claims jwt.MapClaims, key any) (string, error) {
	method := jwt.SigningMethodHS256
	token := &jwt.Token{
		Header: map[string]interface{}{
			"typ": "JWT",
			"alg": method.Alg(),
		},
		Claims: claims,
		Method: method,
	}
	return Sign(token, key)
}

func Sign384(claims jwt.MapClaims, key any) (string, error) {
	method := jwt.SigningMethodHS384
	token := &jwt.Token{
		Header: map[string]interface{}{
			"typ": "JWT",
			"alg": method.Alg(),
		},
		Claims: claims,
		Method: method,
	}
	return Sign(token, key)
}

func Sign512(claims jwt.MapClaims, key any) (string, error) {
	method := jwt.SigningMethodHS512
	token := &jwt.Token{
		Header: map[string]interface{}{
			"typ": "JWT",
			"alg": method.Alg(),
		},
		Claims: claims,
		Method: method,
	}
	return Sign(token, key)
}
