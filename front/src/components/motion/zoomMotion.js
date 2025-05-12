import React from "react";
import { motion } from "framer-motion";

function ZoomMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default ZoomMotion;
//Scale and Fade (Subtle Zoom In)
