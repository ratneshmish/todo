import { useState, useEffect, useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dash from "./pages/Dash";
import Navbar from "./components/Navbar";
import Backgroung from "./components/Backgroung";
import { AppContext } from "./context/AppContext";
import Update_todo from "./components/Update_todo";

function App() {
  const { fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Backgroung />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/update" element={<Update_todo />} />
      </Routes>
    </>
  );
}

export default App;
