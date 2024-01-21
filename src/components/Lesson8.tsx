import { motion, useInView,  } from "framer-motion";
import { useRef } from "react";
const Lesson8 = () => {
   const ref = useRef<HTMLDivElement>(null)

   const inView = useInView(ref)
  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <motion.div 
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
      ref={ref}
      animate={inView ? {opacity:1, x:0, transition:{delay:0.7}}:{opacity:0,x:-500}}
      ></motion.div>
    </div>
  );
};

export default Lesson8;