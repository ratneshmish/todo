const mongoose = require("mongoose");
const Todo = require("../models/todo");

exports.getTodoController = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

exports.updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, done } = req.body;
    console.log(done);
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now(), done }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: `Update successFully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
exports.createTodoController = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description, done } = req.body;
    // create a new Todo obj and inster is DB
    const response = await Todo.create({ title, description, done });
    // console.log(done);
    // ssend a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Enter created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Intrenal server error",
      message: err.message,
    });
  }
};
exports.deleteTodoController = async (req, res) => {
  try {
    // extraact data from body
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      data: todo,
      message: "Detele successFully",
    });
  } catch (error) {
    console.log(`Some thing wrong ${error}`);
    res.status(500).json({
      success: false,
      data: "Intrenal server error",
      message: error.message,
    });
  }
};

exports.find_By_Id = async (req, res) => {
  try {
    const { id } = req.params;
    const Mytodo = await Todo.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: Mytodo,
      message: "Data fetch successfully ",
    });
  } catch (error) {
    console.log(`Some thing wrong ${error}`);
    res.status(500).json({
      success: false,
      data: "Intrenal server error",
      message: error.message,
    });
  }
};
