import React from 'react'
import { motion } from 'framer-motion'
import '../index.css'

const Marquee = () => {
  
  return (
    <div className='w-full py-10 bg-[#004d43] marquee'>
      <div className=' text-white scroll-text border-t-2 border-b-2 border-zinc-300 flex gap-40 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className='text-[13vw] leading-none font-semibold uppercase tracking-tighter'>FRONT END DEVELOPER</motion.h1>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}className='text-[13vw] leading-none font-semibold uppercase tracking-tighter'>FRONT END DEVELOPER</motion.h1>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}className='text-[13vw] leading-none font-semibold uppercase tracking-tighter'>FRONT END DEVELOPER</motion.h1>

      </div>
    </div>
  );
}


export default Marquee;
