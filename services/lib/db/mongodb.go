package db

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoInstance struct {
	Client     *mongo.Client
	Database   *mongo.Database
	Collection *mongo.Collection
}

// NewMongoInstance create new instance
func NewMongoInstance() *MongoInstance {
	return new(MongoInstance)
}

// Connect URI with default options
func (x *MongoInstance) Connect(URI string) *MongoInstance {
	opt := options.Client().ApplyURI(URI)
	return x.ConnectWithOptions(opt)
}

// ConnectWithOptions connect with options
func (x *MongoInstance) ConnectWithOptions(opts ...*options.ClientOptions) *MongoInstance {
	client, err := mongo.Connect(context.TODO(), opts...)
	if err != nil {
		panic(err)
	}
	x.Client = client
	return x
}

// Use determines the database
func (x *MongoInstance) Use(database, collection string) *MongoInstance {
	x.Collection = x.Client.Database(database).Collection(collection)
	return x
}

// Close client
func (x *MongoInstance) Close() error {
	return x.Client.Disconnect(context.TODO())
}

func (x *MongoInstance) Find(filter any) map[string]any {
	var result map[string]any
	err := x.Collection.FindOne(context.TODO(), filter).Decode(&result)
	if err != nil {
		return nil
	}
	return result
}

func (x *MongoInstance) FindVar(v *primitive.M, filter any) *MongoInstance {
	*v = x.Find(filter)
	return x
}

func (x *MongoInstance) FindM(filter any) []map[string]any {
	cursor, err := x.Collection.Find(context.TODO(), filter)
	if err != nil {
		return nil
	}
	var results []map[string]any
	if err = cursor.All(context.TODO(), &results); err != nil {
		return nil
	}
	return results
}

func (x *MongoInstance) Add(data any) any {
	result, err := x.Collection.InsertOne(context.TODO(), data)
	if err != nil {
		return nil
	}
	return result.InsertedID
}

func (x *MongoInstance) AddM(data ...any) any {
	result, err := x.Collection.InsertMany(context.TODO(), data)
	if err != nil {
		return nil
	}
	return result.InsertedIDs
}

func (x *MongoInstance) Insert(v any) {
	x.Add(v)
}

func (x *MongoInstance) InsertM(v []any) {
	x.AddM(v)
}

func (x *MongoInstance) Delete(filter any) int64 {
	results, err := x.Collection.DeleteOne(context.TODO(), filter)
	if err != nil {
		return 0
	}
	return results.DeletedCount
}

func (x *MongoInstance) DeleteM(filter []any) int64 {
	results, err := x.Collection.DeleteMany(context.TODO(), filter)
	if err != nil {
		return 0
	}
	return results.DeletedCount
}

func (x *MongoInstance) Update(filter, update any) int64 {
	result, err := x.Collection.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		return 0
	}
	return result.ModifiedCount
}

func (x *MongoInstance) UpdateM(filter, update []any) int64 {
	result, err := x.Collection.UpdateMany(context.TODO(), filter, update)
	if err != nil {
		return 0
	}
	return result.ModifiedCount
}

func (x *MongoInstance) Count(filter any) int64 {
	_, estCountErr := x.Collection.EstimatedDocumentCount(context.TODO())
	if estCountErr != nil {
		return 0
	}
	count, err := x.Collection.CountDocuments(context.TODO(), filter)
	if err != nil {
		return 0
	}
	return count
}

func (x *MongoInstance) Distinct(key string, filter any) []any {
	results, err := x.Collection.Distinct(context.TODO(), key, filter)
	if err != nil {
		return nil
	}
	return results
}

func (x *MongoInstance) Run(command any) map[string]any {
	var result map[string]any
	err := x.Database.RunCommand(context.TODO(), command).Decode(&result)
	if err != nil {
		return nil
	}
	return result
}

func (x *MongoInstance) Exist(filter any) bool {
	var result map[string]any
	err := x.Collection.FindOne(context.Background(), filter).Decode(&result)
	return err == nil
}

// GetObjectID find filter and get ObjectID ("_id")
func (x *MongoInstance) GetObjectID(filter any) (primitive.ObjectID, bool) {
	data := x.Find(filter)["_id"]
	if data == nil {
		return primitive.ObjectID{}, false
	}
	return data.(primitive.ObjectID), true
}

// Object(000000000000) // ObjectID
//       |<--  ID  -->| // ObjectID.HEX()
// |<--  StringID  -->| // ObjectIP.String()

// GetID find filter and get ObjectID.HEX()
func (x *MongoInstance) GetID(filter any) (string, bool) {
	obj, b := x.GetObjectID(filter)
	return obj.Hex(), b
}

// GetStringID find filter and get ObjectID.String()
func (x *MongoInstance) GetStringID(filter any) (string, bool) {
	obj, b := x.GetObjectID(filter)
	return obj.String(), b
}

// FindByID find by ID
func (x *MongoInstance) FindByID(id string) map[string]any {
	return x.Find(bson.M{"_id": ToObjectID(id)})
}

// ToObjectID converse ID to ObjectID
func ToObjectID(id string) primitive.ObjectID {
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return primitive.NilObjectID
	}
	return objectID
}

// UpdateSet call Update(filter,{$set,update})
func (x *MongoInstance) UpdateSet(filter, update any) {
	x.Update(filter, bson.D{{
		Key: "$set", Value: update,
	}})
}

// UpdatePush call Update(filter,{$push,update})
func (x *MongoInstance) UpdatePush(filter, update any) {
	x.Update(filter, bson.D{{
		Key: "$push", Value: update,
	}})
}

// UpdatePull call Update(filter,{$pull,update})
func (x *MongoInstance) UpdatePull(filter, update any) {
	x.Update(filter, bson.D{{
		Key: "$pull", Value: update,
	}})
}
