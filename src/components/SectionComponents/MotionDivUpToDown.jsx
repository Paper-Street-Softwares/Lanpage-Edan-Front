import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";

export default function MotionDivUpToDown({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const childrenArray = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      {childrenArray}
    </motion.div>
  );
}
