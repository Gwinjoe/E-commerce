const mongoose = require("mongoose");

const connectDB = async (db_uri) => {
  try {
    await mongoose.connect(db_uri);
    console.log(`DATABASE CONNECTED TO ${db_uri}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDB;
