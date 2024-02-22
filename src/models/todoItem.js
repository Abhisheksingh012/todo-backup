const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

const todoItem = mongoose.model('TodoItem', todoSchema);
module.exports=todoItem;