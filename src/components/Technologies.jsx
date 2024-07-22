import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiCplusplus } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiPython } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
import { DiDjango } from 'react-icons/di'
import { useState } from 'react'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    }

})



const Technologies = () => {
    const [hoverText, setHoverText] = useState('');
    const [hoverStyle, setHoverStyle] = useState({ top: 0, left: 0, opacity: 0 });
  
    const handleMouseEnter = (e, text) => {
      const { clientX, clientY } = e;
      setHoverText(text);
      setHoverStyle({ top: clientY, left: clientX + 20, opacity: 1 });
    };
  
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setHoverStyle({ top: clientY, left: clientX + 20, opacity: 1 });
    };
  
    const handleMouseLeave = () => {
      setHoverStyle({ opacity: 0 });
    };
  
    return (
      <div className="border-b border-neutral-800 pb-24 relative">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2> 
  
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-12"
        >
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'Python')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <DiPython className="text-7xl text-cyan-400" />
            </motion.div>
          </div>
  
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'Django')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <DiDjango className="text-7xl text-green-500" />
            </motion.div>
          </div>
  
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 1 } }} 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'C++')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <SiCplusplus className="text-7xl text-cyan-500" />
            </motion.div>
          </div>
  
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 1 } }} 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'MySQL')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <GrMysql className="text-7xl" />
            </motion.div>
          </div>
  
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'Java')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <DiJava className="text-7xl text-red-500" />
            </motion.div>
          </div>
  
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              onMouseEnter={(e) => handleMouseEnter(e, 'React')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
          </div>
        </motion.div> 
  
        <div 
          className="fixed p-2 bg-gray-700 text-white text-sm rounded-md transition-opacity duration-300"
          style={{ top: hoverStyle.top, left: hoverStyle.left, opacity: hoverStyle.opacity }}
        >
          {hoverText}
        </div>
      </div>
    );
  };
  
  export default Technologies;
