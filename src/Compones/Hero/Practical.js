import React from 'react'
import "./Class2.css"
import { motion } from "framer-motion";


const Practical = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="maincls"
  >
    Practical will be Update Soon...!
  </motion.div>
  )
}

export default Practical