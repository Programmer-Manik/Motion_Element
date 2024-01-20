import { motion } from "framer-motion";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
               opacity: 1, 
               scale: 0.7 ,
               transition:{
                  ease: "easeInOut",
                  duration:2,
                }
            },
   hover:{
      scale:3,
         transition:{
            duration:8
         }
   },

   tap:{
      scale:1,rotate:45
   }
};

const Lesson3 = () => {
   return (
      <div>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log('onHover')}
        onHoverEnd={() => console.log('endHover')}
      >
      </motion.div>
    </div>
   );
};

export default Lesson3;