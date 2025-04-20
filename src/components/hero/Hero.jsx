import React from 'react'
import { HERO_CONTENT } from '../../constants'
import hero5 from '../../assets/hero/hero5.jpg'
import hero6 from '../../assets/hero/hero6.jpg'

import {motion} from 'framer-motion'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial='hidden' animate='visible' className='pb-2 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>William Chandler</motion.h1>
                    <motion.span variants={container(0.5)} initial='hidden' animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter'><p style={{lineHeight: 1.5, fontSize: 17, letterSpacing: .2}} >{HERO_CONTENT}</p> </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={hero6} alt='william chandler' height={480} width={480} className='rounded-lg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero