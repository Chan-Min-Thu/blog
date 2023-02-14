import React from "react";
import { motion } from "framer-motion";
import { useGetBlogsQuery } from "../../services/blogsApi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Popular = () => {
  const { data: blogs, isFetching } = useGetBlogsQuery();
  console.log(blogs);
   
  const ScrollRight = ()=>{
    let right = document.getElementById('slider')
    right.scrollLeft=right.scrollLeft-300

  }
  const ScrollLeft = ()=>{
    let left = document.getElementById('slider')
    left.scrollLeft = left.scrollLeft+300
  }
  return (
    <div className="w-full flex flex-col justify-between md:h-[400px] p-5 mt-5 ">
      <div className="flex justify-between">
        <h3 className="text-2xl text-left dark:text-white">Popular Blogs</h3>
        <div className="flex md:mr-10  w-10 justify-between dark:text-white text-xl">
          <MdArrowBackIosNew onClick={ScrollRight} className='opacity-80 cursor-pointer select-none'/>
          <MdArrowForwardIos onClick={ScrollLeft} className='opacity-80 cursor-pointer select-none'/>
        </div>
      </div>
      <div id="slider" className="w-11/12 m-auto flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-thin">
        {isFetching ? (
          <h1>This is loading.</h1>
        ) : (
          blogs.map((blog, index) => (
            <div key={index} className="w-[300px] h-[290px] ">
              <Link to={`/Blogs/${blog.id}`}>
              <motion.div
                initial={{ scale: 1 ,opacity:0}}
                whileInView={{opacity:1}}
                whileHover={{ scale: 1.05 }}
                transition={{duration:0.5}}
                className="w-[250px] h-[250px] md:h-auto my-5 mr-5 bg-slate-100 border-2 border-gray-200 rounded p-2 shadow-sm "
              >
                <h3 className="text-lg mb-2">{blog.title}</h3>
                <img
                  className="w-[250px] h-[150px] mb-5"
                  src={blog.image}
                />
              </motion.div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
