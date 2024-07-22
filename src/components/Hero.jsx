import React from 'react'
import { HERO_CONTENT, quotes } from '../constants/'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})
const TypewriterEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, index));
            index++;
            if (index > text.length) {
                clearInterval(intervalId);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [text]);

    return <span>{displayedText}</span>;
};

const Quotes = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return(
        <div className='quote'>
            <TypewriterEffect text={randomQuote}/>
        </div>
    );
};


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-40 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/1'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'> 
                        Vijay Kesari 
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-cyan-300 via-slate-500 to-violet-500 
                        bg-clip-text text-3xl tracking-tight text-transparent'
                        > 
                        Software Engineer 
                        </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>  
                <motion.div className='italic font-thin tracking-tight lg:text-1xl pt-10'>
                    {Quotes()}
                </motion.div>
            </div>
            
        </div> 
    </div>
  )
}

export default Hero
