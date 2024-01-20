import { motion } from "framer-motion";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
               opacity: 1, 
               scale: 0.7 ,
               transition:{
                  ease: "easeInOut",
                  duration:0.5,
                }
            },
};

const Lesson3 = () => {
   return (
      <div>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover={{scale:1.1}}
      >
      </motion.div>
    </div>
   );
};

export default Lesson3;