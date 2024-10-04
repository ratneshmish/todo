const express = require("express");
const {
  getTodoController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
  find_By_Id,
} = require("../controllers/todoController");

// router object
const router = express.Router();

// routes
// Get all blog
router.get("/todos", getTodoController);

// POst || create blog
router.post("/create-todo", createTodoController);

// PUT || update blog
router.put("/update-todo/:id", updateTodoController);

//Delete || delete blog
router.delete("/delete-todo/:id", deleteTodoController);

router.get("/findTodo/:id", find_By_Id);

module.exports = router;
