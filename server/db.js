import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI || "mongodb+srv://manishmasalafoods:CcAIiXrQ6BFUeEe8@manishmasala.zrbufhp.mongodb.net/myproductdb?retryWrites=true&w=majority";

let db;

const connectToDb = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      db = client.db();
      console.log('Connected to MongoDB');
      callback();
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

const getDb = () => {
  return db;
};

export { connectToDb, getDb };
