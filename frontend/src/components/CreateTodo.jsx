import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CreateTodo = () => {
  let { data, setData, createTodo } = useContext(AppContext);
  let [input, setInput] = useState({
    title: "",
    description: "",
    done: false,
  });
  function textUpdate(event) {
    setInput((prevData) => {
      const { name, value, type } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function todoHandler(event) {
    // event.preventDefault();
    data = input;
    setData(data);
    createTodo(data);
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
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
