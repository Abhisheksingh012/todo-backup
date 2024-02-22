const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  postCount: {
    type: Number,
    default: 0
  },
  putCount: {
    type: Number,
    default: 0
  }
});

const Count = mongoose.model('Count', countSchema);

module.exports = Count;