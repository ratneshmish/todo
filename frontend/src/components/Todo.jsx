import React, { useContext } from "react";
import { IoMdCreate } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
// import Update_todo from "./Update_todo";
import { useNavigate, Link } from "react-router-dom";

function Todo({ title, des, reference, id, index }) {
  const navigate = useNavigate();
  const { delete_Todo, Update_Todo, true_false_update } =
    useContext(AppContext);
  function Delete_todo(key) {
    delete_Todo(key);
  }

  function true_false_hadler(todo_counting, todo_id) {
    true_false_update(todo_counting, todo_id);
  }
  function update_todo_hadler(todo_counting, todo_id) {
    console.log(todo_counting);
    navigate("/update", {
      state: { todo_counting: todo_counting, todo_id: todo_id },
    });
  }

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="todo"
    >
      <div className="dash_todo-head">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="">
          <button className="btn">
            <MdDeleteForever
              color="#fff"
              onClick={() => Delete_todo(id)}
              className="btn_delete"
            />
          </button>
          <button className="btn">
            <MdDone
              color="#fff"
              className="btn_done"
              onClick={() => true_false_hadler(index, id)}
            />
          </button>
        </div>
      </div>

      <div className="dash_des">
        <div>
          <p>{des}</p>
        </div>
        <div className="btn">
          <IoMdCreate
            onClick={() => update_todo_hadler(index, id)}
            className="btn_update"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Todo;
