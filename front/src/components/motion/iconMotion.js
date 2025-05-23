import React from "react";
import { motion } from "framer-motion";

function IconMotion({ children }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default IconMotion;
// Pop-in from Scale (Great for Buttons or Icons)
