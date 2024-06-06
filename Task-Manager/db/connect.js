const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);
// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     // useCreaeIndex: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to the DB...."))
//   .catch((err) => console.log(err));

mongoose.set("strictQuery", false);
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
