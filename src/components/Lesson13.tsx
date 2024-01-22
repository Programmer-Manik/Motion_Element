import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Lesson13 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: 1000,
      transition: {
        duration:0.5,
      },
    },
  };
  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          toggle
        </motion.button>
        {visible && (
          <motion.div
            className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
