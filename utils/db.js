const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_CONNECTION_STRING;

async function db_connect() {
  try{
    await mongoose.connect(mongoDB, {
      bufferCommands: false, //Allows larger payloads
    });
  } catch(error){
    console.log(error)
  }
}

module.exports = { db_connect }
