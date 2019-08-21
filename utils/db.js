const MongoClient = require('mongodb').MongoClient;
const CONNECTION_URI = require('../config/keys').mongoURI;

let mongodb;

const connect = () => {
  MongoClient.connect(CONNECTION_URI, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    mongodb = client;
    console.log("Connected to MongoDB Cluster");
  });
}

const get = () => {
  return mongodb;
}

const close = () => {
  mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};