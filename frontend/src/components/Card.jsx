import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ title, des, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="card"
    >
      <div className="card_title">
        <p className="title">"{title}"</p>
        <MdDeleteForever color="#fff" />
      </div>
      <p className="content">"{des}"</p>
      <div className="card_btn">
        <GrUpdate color="#fff" />
        <MdDone color="#fff" />
      </div>
    </motion.div>
  );
};

export default Card;
