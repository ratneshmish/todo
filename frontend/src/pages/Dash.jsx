import React, { useRef } from "react";
import Todo from "../components/Todo";
import CreateTodo from "../components/CreateTodo";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { VscGitPullRequestCreate } from "react-icons/vsc";

const Dash = () => {
  const ref = useRef(null);
  const { todo, setTodo, data, data_true, data_false } = useContext(AppContext);
  function createHandler() {
    setTodo(!todo);
  }
  return (
    <div className="dash">
      <div className="todo_head">
        <div>Your's Todo's</div>
        <button className="btn">
          <VscGitPullRequestCreate
            className="btn_create"
            color="#fff"
            onClick={createHandler}
          />
        </button>
      </div>
      <div className="show_todo_dash " ref={ref}>
        {todo == false ? (
          data_false.map((todo, index) => {
            return (
              <Todo
                key={todo._id}
                title={todo.title}
                des={todo.description}
                reference={ref}
                id={todo._id}
                index={index}
              />
            );
          })
        ) : (
          <div className="createtodo">
            <CreateTodo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
