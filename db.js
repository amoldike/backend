const mongoose = require("mongoose");

mongoose.connect(process.env.dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
