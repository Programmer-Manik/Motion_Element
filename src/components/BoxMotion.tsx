import { motion } from 'framer-motion';
const parent = {
   // initial:{rotate:0},
   // animate:{rotate:360},
   hidden: {opacity:0, scale:0.9},
   visible:{opacity:1,scale:1.1}
}
const BoxMotion = () => {
   return (
      <motion.div
       className='flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500 '
       variants={parent}
      //  initial="initial"
      //  animate="animate"
      initial="hidden"
      animate="visible"
      transition={{ ease:"easeInOut" , duration:1.5}}
       >
         <motion.div className='size-20 rounded-sm bg-cyan-400'></motion.div>
         <motion.div className='size-20 rounded-sm bg-cyan-400'></motion.div>
         <motion.div className='size-20 rounded-sm bg-cyan-400'></motion.div>
         <motion.div className='size-20 rounded-sm bg-cyan-400'></motion.div>
       </motion.div>
   );
};

export default BoxMotion;