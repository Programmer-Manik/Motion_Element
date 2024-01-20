import { motion } from 'framer-motion';

const BoxMotion = () => {
   return (
      <motion.div
       className='size-64 rounded-lg bg-indigo-500 '
       initial={{rotate:0}}
       animate={{rotate:360}}
       transition={{ type:'spring', duration:3}}
       ></motion.div>
   );
};

export default BoxMotion;