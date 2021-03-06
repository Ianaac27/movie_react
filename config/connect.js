const mongoose = require("mongoose");

// Connect to the Mongo DB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/moviereact",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);