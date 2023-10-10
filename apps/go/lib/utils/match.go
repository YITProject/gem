package utils

import (
	"regexp"
)

// CheckEmail check email is legal
func CheckEmail(origin string) bool {
	reg := regexp.MustCompile(`^.+@.+\..+$`)
	return isMatch(reg, origin)
}

// CheckPassword check password is legal
func CheckPassword(origin string) bool {
	reg := regexp.MustCompile(`^[0-9a-zA-Z]+$`)
	return isMatch(reg, origin)
}

func isMatch(reg *regexp.Regexp, origin string) bool {
	return reg.MatchString(origin)
}
