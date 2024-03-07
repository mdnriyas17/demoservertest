const mongoose = require("mongoose");

const connectDB = async () => {
 try {
 const conn = await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    })


  
 } catch (error) {
  console.log(error);
 }

}

module.exports = connectDB