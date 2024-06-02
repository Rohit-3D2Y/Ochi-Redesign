import React, {  useEffect, useState } from 'react';
import '../index.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const About = ({isDarkMode}) => {
  const techStack = ["HTML", "CSS", "JavaScript","TailwindCSS","BootStrap","ReactJS","MySQL","PostGres","C Programming","Python"];

  const [rotate, setRotate] = useState(0)
  

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/1.5;
      let deltaY = mouseY - window.innerHeight/1.5;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  },)
  
  

  return (
    <div className={`about w-full p-20 ${isDarkMode ? 'darkmode' : 'lightmode'}`}>
      <h1 className=' text-[2vw] leading-16 tracking-tighter'>A highly motivated Engineering Student with a solid understanding of Front-End Development and scripting languages, seeking an Internship opportunity to leverage my technical skills and contribute towards the growth of respective teams and companies.</h1>

      <div className='w-full flex gap-10 border-t-[2px]  pt-10 mt-16 border-[#a1b652]'>
  <div className='w-2/3'>
    <h1 className='text-[8vw] font-[Teko] text-center'>Technology Stack</h1>
    <div className="cards flex gap-10 text-center p-10 flex-wrap">
      {techStack.map((tech, i) => (
        <figure key={i} className="card flex justify-start items-center">
          {/* Add icons next to technology names */}
          {tech === "HTML" && <FaHtml5 className='icon text-[3vw] ml-4 text-red-600'/>}
          {tech === "CSS" && <FaCss3Alt className='icon text-[3vw] ml-4 text-blue-500'/>}
          {tech === "JavaScript" && <IoLogoJavascript className='icon text-[3vw] ml-4 text-yellow-400'/>}
          {tech === "TailwindCSS" && <RiTailwindCssFill className='icon text-[3vw] ml-3 text-blue-400'/>}
          {tech === "BootStrap" && <FaBootstrap  className='icon text-[3vw] ml-4 text-violet-700'/>}
          {tech === "ReactJS" && <FaReact  className='icon text-[3vw] ml-4 text-blue-200'/>}
          {tech === "MySQL" && <SiMysql   className='icon text-[3vw] ml-4 text-yellow-200'/>}

          <div className="card_title w-2/3">{tech}</div>
        </figure>
            ))}
          </div>
        </div>
        <div className='w-1/3 h-[30vw] rounded-3xl mt-36 relative'><img src='https://www.contestwatchers.com/wp-content/uploads/2024/05/5th-Bolu-International-Poster-Design-Competition-BIAH.webp' alt='Sample' className=' rounded-3xl h-[20vw]' />
        <div className=' eyes absolute  top-1 translate-y-[70%] left-1/2 -translate-x-[50%]  flex gap-8'>
            <div className='w-[7vw] h-[7vw] bg-zinc-100 rounded-full flex justify-center items-center'>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                <h2 className='absolute top-1 translate-y-[70%] left-1/2 -translate-x-[50%] text-white'>PLAY</h2>
                <div style={{transform:`translate(-50%,70%) rotate(${rotate}deg)`}} className='line absolute top-1 translate-y-[70%] left-1/2 -translate-x-[50%] line w-full h-5'>
                 <div className='w-5 h-5 bg-zinc-100 rounded-full'></div> 
                 </div>
              </div>
            </div>
            <div className='relative w-[7vw] h-[7vw] bg-zinc-100 rounded-full flex justify-center items-center'>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
              <h2 className='absolute top-1 translate-y-[70%] left-1/2 -translate-x-[50%] text-white'>PLAY</h2>
              <div style={{transform:`translate(-50%,70%) rotate(${rotate}deg)`}} className='line absolute top-1 translate-y-[70%] left-1/2 -translate-x-[50%] line w-full h-5'>
                 <div className='w-5 h-5 bg-zinc-100 rounded-full'></div> 
                 </div>
              </div>
            </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
