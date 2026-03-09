import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../assets/data/motions";
function MotionReused({ children, animation = "fadeSlideUp" }) {
  return (
    <motion.div
      initial={motionVariants[animation].initial}
      animate={motionVariants[animation].animate}
      exit={motionVariants[animation].exit}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionReused;
