let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let message = new Schema({
  autor: String,
  message: String,
  time: Date
});

const Message = mongoose.model("Message", message);
module.exports = Message;
