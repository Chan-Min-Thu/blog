import React, { useState } from "react";
import { useGetSingleBlogQuery } from "../../services/blogsApi";
import { useParams } from "react-router-dom";
import {MdOpenInNew, MdOutlineArrowBack} from "react-icons/md"
import {FiEdit} from "react-icons/fi"
import {CgMenuLeft} from 'react-icons/cg'
import { useNavigate,Link } from "react-router-dom";
import BlogList from "./BlogList";
import { motion } from "framer-motion";


const Detail = () => {
  const { id } = useParams();
  const { data: blog, isFetching } = useGetSingleBlogQuery(id);
  const navigate= useNavigate()
  const [open,setOpen] = useState(false)
  
  return (
    <div className="relative ">
    <div className="flex fixed z-10 flex-wrap dark:bg-slate-800 flex-col h-auto overflow-y-scroll scrollbar-thin justify-between">
       <MdOutlineArrowBack className="absolute text-2xl dark:text-gray-50 top-3 left-6" onClick={()=>navigate(-1)}/>
       <CgMenuLeft className="absolute md:hidden text-2xl dark:text-gray-50 top-3 right-6" onClick={()=>setOpen(!open)}/>
        {isFetching ? (
          <h1>Loading</h1>
        ) : (
          <div className="md:w-2/3 w-full h-[600px] p-10 overflow-y-scroll scrollbar-thin">
            <motion.img initial={{scale:0,x:-200}} whileInView={{scale:1,x:0}} transition={{duration:1,delay:0.3}} src={blog.image} className="md:w-1/2 w-full h-auto m-auto rounded-md" />
            <div className="flex justify-between md:w-1/2 w-full m-auto">
            <motion.h1 initial={{scale:0,y:50}} whileInView={{scale:1,y:0}} transition={{duration:1,delay:0.3}} className=" text-xl text-stone-800 dark:text-gray-200 my-5">
              {blog.title}
            </motion.h1>
            <Link to={`/Blogs/edit/${blog.id}`}>
            <motion.span 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:1,delay:0.9}}> 
            <FiEdit 

            className='text-stone-900 m-2 dark:text-white'/>
            </motion.span>
            </Link>
            </div>
            <motion.p initial={{scale:0,y:-50}} whileInView={{scale:1,y:0}} transition={{duration:1,delay:0.4}} className="md:w-1/2 w-full text-lg text-stone-600 dark:text-gray-300 my-3 m-auto ">
              {blog.description}
            </motion.p>
          </div>
        )}
      <motion.div initial={{height:0}} whileInView={{height:300}} transition={{duration:1,delay:0.4}} className={`h-[300px] md:w-1/3 w-full ${open?"block":"hidden"} md:block rounded-md  z-20 md:z-10 fixed top-16 md:right-10 pr-4 overflow-scroll mt-10 scrollbar-thin`}>
        <BlogList setOpen={setOpen} open={open}  />
      </motion.div>
    </div>
    </div>
  );
};

export default Detail;
