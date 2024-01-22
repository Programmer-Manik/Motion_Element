import { motion, useScroll } from "framer-motion";

const Lesson12 = () => {
  const { scrollYProgress} = useScroll();
  
  return (
    <motion.div className=" h-10 w-full fixed top-0 bg-green-500"
    style={{scaleX:scrollYProgress}}
    >

    </motion.div>
  )
};

export default Lesson12;