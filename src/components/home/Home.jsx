import React from "react";
import Typewriter from "typewriter-effect";
import {easeIn, motion, spring} from 'framer-motion'
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";
import { Link } from "react-router-dom";
import Popular from "../popular/Popular";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="scroll-smooth">
    <div className="w-11/12 flex md:justify-around mt-10 m-auto xl:mt-1 h-auto md:flex-row flex-col ">
      <div className="md:mr-5 md:w-3/6 w-11/12 m-3 h-2/3">
        <motion.img
          src="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg"
          className="rounded-md translate-x-0"
          initial={{x:-200,scale:0}}
          whileInView={{
            x:0,
            scale: 1,
          }}
          transition={{duration:1,delay:0.1}}
        />
        <div className="flex justify-between italic text-xs mx-2 text-stone-800 opacity-60 dark:text-white">
        <span>14/2/2017</span>
        <span>Jhon Smit,Education</span>
        </div>
        

      </div> 
        <div className="md:w-1/3 w-full align-middle h-2/3 mt-4 md:m-auto">
            <span className="font-semibold md:text-4xl text-3xl text-blue-600 tracking-tighter md:mb-5 mb-2">
            <Typewriter  
            options={{autoStart:true,loop:true,delay:50,strings:["Programming Is My Life."]}} />
            </span>
            <motion.p 
            initial={{opacity:0,y:-30}}
            whileInView={{opacity:1,y:1}}
            transition={{duration:1,delay:0.3}}
            className="md:text-3xl text-2xl text-blue-500 font-medium md:tracking-widest tracking-wide mb-5">
            Do You <span className="text-red-500 font-medium">Interest</span>it ?
            </motion.p>
          <motion.p 
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:1}}
          transition={{duration:1,delay:0.3}}
          className="text-stone-900 opacity-70 dark:text-white mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            laborum nam possimus ratione numquam, laboriosam .....
          </motion.p>
          <Link to='/Blogs/1675490754862'>
          <motion.button
          initial={{x:0}}
          whileInView={{x:[10,-10]}}
          whileHover={{scale:1.1}}
            type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Read...</motion.button>
          </Link>
        </div>
     
      
    </div>
    <Blogs/>
    <Popular/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
