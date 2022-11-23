const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose.connect("mongodb+srv://Anubhav4:anubhav@cluster0.vpixnkk.mongodb.net/InterviewDB", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("MONGO CONNECTED");
} catch {
  console.log(error);
}
