const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DTAv basr");
  } catch (error) {
    console.log("some thing wrong");
  }
};

module.exports = connectDB;
