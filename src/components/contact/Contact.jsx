import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin,AiOutlineGithub,AiFillYoutube} from 'react-icons/ai'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <div className='flex w-full flex-row flex-wrap justify-center bg-slate-300 dark:bg-slate-800'>
        <div className='w-[250px] m-10 h-auto p-5 flex flex-col gap-5'>
          <motion.h3 className='text-xl font-semiblod mb-3 uppercase dark:text-red-50'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,delay:0.3}}
           >Contact Us</motion.h3>
          <motion.ul className='text-sm text-stone-800 dark:text-red-50 opacity-75 flex flex-col gap-5'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,delay:0.5}}>
            <li>chanminthu2434@gmail.com</li>
            <li>09 794 834 517</li>
            <ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1,delay:0.3}} className='w-full justify-start flex '>
              <li className='mr-3 my-3 text-xl dark:text-red-50'><BsFacebook/></li>
              <li className='m-3 text-xl dark:text-red-50'><AiFillLinkedin/></li>
              <li className='m-3 text-xl dark:text-red-50'><AiFillYoutube/></li>
              <li className='m-3 text-xl dark:text-red-50'><AiOutlineGithub/></li>
            </ul>
          </motion.ul>
        </div>
        <div className='w-[300px] m-10 h-auto p-5 flex flex-col gap-5'>
        <motion.h3 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.3}} className='text-xl font-semiblod mb-3 uppercase dark:text-red-50'>About</motion.h3>
          <motion.ul 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1,delay:0.5}}
          className='text-sm text-stone-800 dark:text-red-50 opacity-75  flex flex-col gap-3  '>
            <li>Chan Min Thu</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eiusitationem laborum temporib</li>         
          </motion.ul>
        </div>
        <div className='w-[200px] m-10 h-auto p-5 flex flex-col gap-5'>
        <motion.h3 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.3}}
        className='text-xl font-semiblod mb-3 uppercase dark:text-red-50'>Blogs</motion.h3>
        <motion.ul className='text-sm text-stone-800 dark:text-red-50 opacity-75  flex flex-col gap-3'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}}>
            <li>This is my first blogs.</li>
            <li>This is my Second Blogs.</li>
            <li>Programmming is my life.</li>
            <li>I love travelling.</li>
          </motion.ul>
        </div>
        <div   className='w-[250px] m- h-auto p-5 flex flex-col gap-5 justify-center'>
          <motion.h3
           initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1,delay:0.3}} 
          className='text-xl font-semiblod mb-3 uppercase dark:text-red-50'>Blogs.</motion.h3>
          <motion.p   
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1,delay:0.5}}
        className='text-sm mb-5 opacity-70 dark:text-red-50'>@ 2022 My Blog Projects</motion.p>
        </div>
    </div>
  )
}

export default Contact