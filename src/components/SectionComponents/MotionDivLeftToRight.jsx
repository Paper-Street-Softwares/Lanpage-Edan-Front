import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";

export default function MotionDivLeftToRight({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const childrenArray = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      {childrenArray}
    </motion.div>
  );
}
