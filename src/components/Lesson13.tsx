import { motion, } from "framer-motion";
const Lesson13 = () => {
   const box = {
      hidden: {opacity:0.5, scale:0.5},
      visible:{opacity:1, scale:1,
         transition:{
            duration:1.5
         },
      },
   };
  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <motion.div 
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
      variants={box}
      initial='hidden'
      animate="visible"
      ></motion.div>
    </div>
  );
};

export default Lesson13;