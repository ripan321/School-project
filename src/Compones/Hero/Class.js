import React from "react";
import "./Class2.css";
import Classcard from "../Class-card";
// import { motion } from "framer-motion";
// import cards from "../Data/Cards"

const Class = () => {
  return (
    <>
      {/* <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="maincls"
    >
      Class will be Update Soon...!
    </motion.div> */}
      <div>
        <Classcard />
      </div>
    </>
  );
};

export default Class;
