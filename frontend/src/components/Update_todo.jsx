import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Update_todo = () => {
  const { data_false, Update_Todo } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();
  const index = location.state.todo_counting;
  const id = location.state.todo_id;
  const Mytodo = data_false[index];
  let [input, setInput] = useState({
    title: Mytodo.title,
    description: Mytodo.description,
    done: Mytodo.done,
  });

  function textUpdate(event) {
    setInput((prevData) => {
      const { name, value, type } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? event.target.checked : value,
      };
    });
  }

  function todoHandler(event) {
    Update_Todo(id, input);
    navigate("/dashboard");
  }
  return (
    <div>
      <form onSubmit={todoHandler}>
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={textUpdate}
            value={input.title}
          />
        </label>
        <label>
          Work
          <input
            type="text"
            name="description"
            onChange={textUpdate}
            value={input.description}
          />
        </label>
        <input
          type="checkbox"
          name="done"
          onChange={textUpdate}
          className="done"
          checked={input.done}
        />
        <button>Update Todo</button>
      </form>
    </div>
  );
};

export default Update_todo;
