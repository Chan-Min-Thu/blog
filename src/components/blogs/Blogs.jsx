
import React from "react";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../services/blogsApi";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Blog from "./Blog";
import {motion} from 'framer-motion'

const Blogs = () => {
  const { data:blogs,isLoading } = useGetBlogsQuery();
  console.log(isLoading)
  return (
    <div className="w-full flex justify-center mt-10 flex-col">
      <motion.div initial={{width:0}}
      whileInView={{width:"50%"}}
      transition={{duration:1,delay:0.5}}
       className="h-1 bg-blue-500 flex justify-center mb-11 mx-auto align-middle relative">
        <h1 className="text-xl md:text-3xl absolute top-[-15px] mx-auto z-20 text-center dark:text-white bg-white dark:bg-gray-900">LATEST BLOGS</h1>
      </motion.div>
      <div className="w-8/12 mx-auto flex flex-row flex-wrap justify-center  overflow-x-auto">
      {
        isLoading ?<h1>loading....</h1>: blogs.slice(blogs.length-3).map((blog,index)=> <Blog key={index} blog={blog}/>) 
      }
      
      </div>
      <div className="m-auto">
      <Link className="text-stone-50 text-end bg-blue-600 p-2 rounded-md" to='/allBlogs'>View All<HiOutlineArrowNarrowRight className="inline ml-3 text-gray-50"/></Link>
      </div>
      
    </div>
  );
};

export default Blogs;
