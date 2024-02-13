import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ endValue }) => {
  const [counter, setCounter] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    let intervalId;

    if (inView) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          const increment = Math.ceil((endValue - prevCounter) / 100);
          return prevCounter + increment;
        });
      }, 5);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [endValue, inView]);

  return (
    <motion.span
      ref={ref}
      style={{ display: "inline-block" }}
      animate={{ scale: [1, 1.2, 1] }}
    >
      {counter}
    </motion.span>
  );
};

export default AnimatedCounter;
