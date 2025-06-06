import React from "react";
import { motion } from "framer-motion";

function SoftMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default SoftMotion;
// Soft Fade (Minimalist Pages or Text)
