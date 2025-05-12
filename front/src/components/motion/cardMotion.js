import React from "react";
import { motion } from "framer-motion";

function CardMotion({ children }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default CardMotion;
//Slide left with delay (Content Panels or Cards)
