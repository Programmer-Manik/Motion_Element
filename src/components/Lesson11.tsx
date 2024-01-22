import { motion, useMotionValue, useTransform,} from "framer-motion";

const Lesson11 = () => {
  const x = useMotionValue(0)
  //const opacity = useTransform(x,[0,600],[1,0])
  //const scale = useTransform(x,[-200,200],[0.5,1.5])
  const rotate = useTransform(x,[-200,200],[0,180])
  return (
    <div className="size-[500px] flex flex-col items-center justify-center  border border-red-100">
      <motion.div 
      className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
      style={{x,rotate}}
      drag='x'
      ></motion.div>
    </div>
  );
};

export default Lesson11;