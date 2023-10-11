package database

import (
	"fmt"
	"goupapp/internal/db"
)

var RedisTokenMap = db.NewRedisInstance()

var RedisCodeMap = db.NewRedisInstance()

var MongoAccount = db.NewMongoInstance()

func _init() {
	fmt.Println("Initializing databases")
	RedisCodeMap.Connect("127.0.0.1:6379", 0)
	RedisTokenMap.Connect("127.0.0.1:6379", 1)
	MongoAccount.Connect("mongodb://127.0.0.1:27017").Use("test", "test")
}
