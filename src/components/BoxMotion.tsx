import { motion } from "framer-motion";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1.1 },
};
const child = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1.1 },
}
const BoxMotion = () => {
  return (
    <div>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 1,
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          className="size-20 rounded-sm bg-cyan-400"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 rounded-sm bg-cyan-400"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 rounded-sm bg-cyan-400"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 rounded-sm bg-cyan-400"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default BoxMotion;
