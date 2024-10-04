const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title require"],
    },
    description: {
      type: String,
      required: [true, "description is require"],
    },
    done: {
      type: Boolean,
      required: [true, "Please the type"],
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
