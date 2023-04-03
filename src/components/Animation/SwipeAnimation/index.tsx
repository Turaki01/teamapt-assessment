import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface SwipeAnimationProps {
  children: React.ReactNode;
  duration?: number;
  initial?: { x: number; opacity: number };
  animate?: { x: number; opacity: number };
  exit?: { x: number; opacity: number };
}

const SwipeAnimation: React.FC<SwipeAnimationProps> = ({
  children,
  duration = 0.2,
  initial = { x: 10, opacity: 0 },
  animate = { x: 0, opacity: 1 },
  exit = { x: -10, opacity: 0 }
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SwipeAnimation;
