const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todo", todoSchema);
