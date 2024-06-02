import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiEye2Line } from "react-icons/ri";

const Landing = () => {
  
  return (
    <div className='w-full h-screen pt-1'>
        <div className='textstructure mt-40 px-10'>
            <div className='masker'>
                <h1 className='text-[5vw] leading-none tracking-tighter font-semibold'>CREATING</h1>
            </div>
            <div className='w-fit flex gap-3'>
                <div className='text1 bg-green-600 text-[5vw] h-[5vw] w-[6vw] rounded-full'><h1 className='flex p-1'><RiEye2Line /><RiEye2Line /></h1></div>
            <div className='masker'>
                <h1 className='text-[5vw] leading-none tracking-tighter font-semibold'>EYE OPENING</h1>
            </div>
            </div>
            <div className='masker'>
                <h1 className='text-[5vw] leading-none tracking-tighter font-semibold'>WEBSITES</h1>
            </div>
        </div>
        <div className='profile w-[40vw] h-[25vw] bg-blue-500 mr-[20vw] -mt-[43vh] ml-44'><h1></h1></div>
        <div className='extra float-end -mt-40 w-[14vw] h-[4vw] bg-red-500 flex items-center px-3 rotate-[270deg] -mr-16'>
         <p className=' w-full font-semibold text-sm'>Site of the Day</p>
         <h1 className='text-center text-2xl rotate-[90deg]'>W.</h1>
            
        </div>
        <div className='bot-struct border-t-[1px] border-zinc-600 mt-16 flex justify-between'>
            <p className='text-sm px-20 py-6'>For public and private companies</p>
            <p className='text-sm px-20 py-6'>From the first pitch to IPO</p>
            <div className='flex gap-2 justify-center items-center'>
            <div className=' start mt-4 h-10 text-sm px-4 py-2 border-[1px] rounded-full border-zinc-400'>START THE PROJECT</div>
            <div className='p-2 mt-4 mr-4 round-icon text-xl border-[1px] rounded-full border-zinc-400'><MdOutlineArrowOutward /></div>
            </div>

            
        </div>
    </div>
  )
}

export default Landing;
