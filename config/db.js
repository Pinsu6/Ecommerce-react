const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to mongodb ${conn.connection.host}`.bgGreen.white)
  } catch (error) {
    console.log(`error in mongo ${error}`.bgRed.white)
  }
}

module.exports = connectDB;