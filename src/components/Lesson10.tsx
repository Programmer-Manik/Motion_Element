import { motion, useDragControls,   } from "framer-motion";

const Lesson10 = () => {
   const controls = useDragControls();
   

  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <motion.div 
      onPointerDown={(e) => controls.start(e)}
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 h-10 rounded-lg bg-green-500"
      ></motion.div>
      <motion.div 
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
         drag='x'
         dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson10;