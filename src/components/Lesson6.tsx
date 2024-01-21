import { motion } from "framer-motion";
import { useRef } from "react";
const parent = {
  hidden: { 
    scale: 0.9,
     x:0,
     y:0,
   opacity:0
   },
  visible: {
    x:[0,300,-300,0],
    y:[0,300,-300,0],
    scale: 0.7,
    opacity:1,
    rotate:[0,300,-300,0],
    transition: {
      ease: "linear",
      repeat:Infinity,
      duration: 5,
      opacity:{
         duration:0.5,
      },
      rotate:{
         duration:1,
         delay:0.5,
         repeat:Infinity
      }
    },
  },
  hover: {
    opacity: 1,
  },
};

const Lesson6 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="size-[500px] flex justify-center items-center border border-red-100"
    >
      <motion.div
        className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        // whileTap="tap"
        //onHoverStart={() => console.log('onHover')}
        // onHoverEnd={() => console.log('endHover')}
        drag
        //   dragSnapToOrigin
        dragElastic={1}
        //   dragConstraints={{left:-200, right:200, top:-200, bottom:200}}
        dragConstraints={parentRef}
        whileDrag={{
          scale: 1.1,
          boxShadow: "0px 10px 10px #000",
        }}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
