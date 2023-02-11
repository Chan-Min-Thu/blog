import React from "react";
import { motion } from "framer-motion";
import { useGetBlogsQuery } from "../../services/blogsApi";
import Blogs from "../blogs/Blogs";


const Popular = () => {
   const {data:blogs,isFetching} = useGetBlogsQuery()
   console.log(blogs)
  return (
    <div className="w-full bg-red-300 flex flex-col justify-between md:h-[400px] p-5 mt-5 ">
      <h3 className="text-2xl text-left dark:text-white">Popular Blogs</h3>
      <div className="w-11/12 m-auto overflow-x-scroll">
      {isFetching?<h1>This is loading.</h1>:
      blogs.map((blog,index)=>(
        <div key={index} className="w-[300px] h-[350px] inline-block">
           <div className="w-[250px] md:w-1/4 h-[350px] md:h-auto my-auto ">
            <img className="w-[250px] h-[150px]" src={blog.image}/>
           </div>
        </div>
      ))}
      </div>
    </div>
    
  );
};

export default Popular;
