package utils

import "testing"

func TestName(t *testing.T) {
	s := GetStringAfter("ba 1231", "ba", 1)
	t.Log(s)
}
