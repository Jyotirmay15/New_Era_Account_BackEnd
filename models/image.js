const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  srNumber: { type: Number, required: true },
  image: {type: String, required: false},
});

module.exports = mongoose.model("Image", imageSchema);
