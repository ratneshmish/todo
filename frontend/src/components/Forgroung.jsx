import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";

const Forgroung = () => {
  const ref = useRef(null);
  const { data_false } = useContext(AppContext);
  return (
    <div className="cards" ref={ref}>
      {data_false.map((todo) => {
        return (
          <Card
            key={todo._id}
            title={todo.title}
            des={todo.description}
            reference={ref}
          />
        );
      })}
    </div>
  );
};

export default Forgroung;
