const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });    
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Database Not Connected");
  }

}
module.exports = connectDB;