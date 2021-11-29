const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGODBURI);
  try {
    await mongoose.connect(`${process.env.MONGODBURI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to Mongo DB`);
  } catch (err) {
    console.log(`connection fail: ${err}`);
  }
};

module.exports = connectDB;
