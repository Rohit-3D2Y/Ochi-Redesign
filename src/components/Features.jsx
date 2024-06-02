import React from 'react'

const Features = ({isDarkMode}) => {
  return (
    <div className={`w-full py-10 text ${isDarkMode ? 'darkmode' : 'lightmode'}`}>
        <div className='w-full px-20 border-b-2 border-zinc-700'>
            <h1 className='text-[4vw] tracking-tighter '>Featured Projects</h1>
        </div>
      
    </div>
  )
}

export default Features;
