import React from "react";
import { motion } from "framer-motion";

function MobileMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default MobileMotion;
//Slide from Bottom (Mobile Page Feel)
