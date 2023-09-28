package utils

// GetStringAfter return a string is "" or str[len(get)+l:] if str start with get
func GetStringAfter(str, get string, l int) string {
	if len(str) >= len(get)+l && str[:len(get)] == get {
		return str[len(get)+l:]
	}
	return ""
}
