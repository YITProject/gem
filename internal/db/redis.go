package db

import (
	"context"
	"github.com/redis/go-redis/v9"
	"time"
)

type RedisInstance struct {
	*redis.Client
}

// NewRedisInstance create new instance
func NewRedisInstance() *RedisInstance {
	return new(RedisInstance)
}

// Connect with default options
func (r *RedisInstance) Connect(addr string, db int) {
	r.ConnectWithOption(&redis.Options{
		Addr: addr,
		DB:   db,
	})
}

// ConnectWithOption connect with options
func (r *RedisInstance) ConnectWithOption(opt *redis.Options) {
	r.Client = redis.NewClient(opt)
}

// Close client
func (r *RedisInstance) Close() error {
	return r.Client.Close()
}

func (r *RedisInstance) Get(key string) (string, error) {
	return r.Client.Get(context.TODO(), key).Result()
}

func (r *RedisInstance) Set(key string, value any, expiration ...int) error {
	exp := 0
	if len(expiration) > 0 {
		exp = expiration[0]
	}
	return r.Client.Set(context.TODO(), key, value, time.Duration(exp)*time.Second).Err()
}

func (r *RedisInstance) Del(keys ...string) {
	r.Client.Del(context.TODO(), keys...)
}
