import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

// npm i context-component

export default function AppContextProvider({ children }) {
  const url_data = "http://localhost:8000/api/v1";
  const [loading, setLoading] = useState(false);
  const [login, SetLogin] = useState(true);
  const [data_true, setData_true] = useState([]);
  const [data_false, setData_false] = useState([]);
  const [todo, setTodo] = useState(false);
  const [data, setData] = useState(null);

  // data fetch
  async function fetchData() {
    setLoading(true);
    let url = `${url_data}/todos`;
    try {
      const data = await fetch(url, { method: "get" });
      const res = await data.json();
      setData_false(res.data);
    } catch (error) {
      setData_false([]);
      setData_true([]);
    }
    setLoading(false);
  }

  async function createTodo(data) {
    // console.log(data);
    try {
      const response = await fetch(`http://localhost:8000/api/v1/create-todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("todo created successfully");
    } catch (error) {
      console.log("This is errro in data save");
    }
  }

  async function delete_Todo(data) {
    try {
      let response = await fetch(
        `http://localhost:8000/api/v1/delete-todo/${data}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log("This is errro in data save");
    }
  }

  async function true_false_update(index, Todo_id) {
    data_false[index].done = !data_false[index].done;
    let Mytodo = data_false[index];
    // console.log(Mytodo);
    try {
      let response = await fetch(
        `http://localhost:8000/api/v1/update-todo/${Todo_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Mytodo),
        }
      );

      console.log(`Todo update Successfully ${Mytodo}`);
    } catch (error) {
      console.log("This is errro in data updating");
    }
  }

  async function Update_Todo(Todo_id, updateed) {
    try {
      let response = await fetch(
        `http://localhost:8000/api/v1/update-todo/${Todo_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateed),
        }
      );
      console.log(`Todo update Successfully ${updateed}`);
      window.location.reload();
    } catch (error) {
      console.log("This is errro in data updating");
    }
  }

  const value = {
    loading,
    setLoading,
    login,
    SetLogin,
    data_true,
    setData_true,
    data_false,
    setData_false,
    fetchData,
    todo,
    setTodo,
    createTodo,
    data,
    setData,
    delete_Todo,
    Update_Todo,
    true_false_update,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
