import { motion } from "framer-motion";
import React from "react";

interface FadeInAnimationProps {
  children: React.ReactNode;
  yOffset: number;
  easing?: number[];
  duration?: number;
  delay?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  delay = 0.25
}) => {
  const transition = React.useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing
    }),
    [delay, easing]
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={"show"}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
