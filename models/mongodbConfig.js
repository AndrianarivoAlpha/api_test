const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://127.0.0.1:27017/api_test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) console.log("Connection MongoDB error " + err) ;
    else console.log("MongoDB connection success");
  }
)