import { motion, useCycle } from "framer-motion";
const Lesson7 = () => {
   const [x , cycle] = useCycle(0, -100, 200, -200)
  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <motion.div 
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
      animate={{x:x}}
      onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
