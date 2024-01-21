import {motion, useAnimationControls} from 'framer-motion'
import { useEffect } from 'react';

const Lesson6 = () => {
   const controls = useAnimationControls()
   // const [toggle, setToggle] = useState(false)
   useEffect(()=> {
         controls.start((i)=>({x:-200,transition:{duration:5,delay:i*1}}))
   },[controls])
   return (
      <div
      className="size-[500px] flex flex-col items-center justify-center  border border-red-100"
      >
         <motion.div
         className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
         animate={controls}
         custom={1}
         >
            
         </motion.div>
         <motion.div
         className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
         animate={controls}
         custom={2}
         >
            
         </motion.div>
         <motion.div
         className="flex flex-wrap justify-center items-center gap-5 p-5 size-64 rounded-lg bg-indigo-500"
         animate={controls}
         custom={3}
         >
            
         </motion.div>
      </div>
   );
};

export default Lesson6;