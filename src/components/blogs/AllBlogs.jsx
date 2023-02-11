import React from 'react'
import Blog from './Blog'
import { useGetBlogsQuery } from '../../services/blogsApi'
import { motion } from 'framer-motion'

const AllBlogs = () => {
                const { data:blogs,isLoading } = useGetBlogsQuery()
                return (
                  <div className="w-full flex justify-center my-10 flex-col">
                    <motion.div 
                      initial={{width:"30%",opacity:0}}
                      whileInView={{width:"50%",opacity:1}}
                      transition={{duration:1,delay:0.5}}
                      className="w-1/2 h-1 bg-blue-500 flex justify-center mb-11 mx-auto align-middle relative">
                      <h1 className="text-xl md:text-3xl absolute top-[-15px] mx-auto z-20 text-center dark:text-white bg-slate-200 dark:bg-gray-900">ALL BLOGS</h1>
                      <motion.p 
                       initial={{opacity:0}}
                       whileInView={{opacity:1}}
                       transition={{duration:1,delay:0.5}}
                      className='text-sm opacity-70 font-mono my-10'>This is latest blogs for my Blogs.</motion.p>
                    </motion.div>
                    <div className="w-8/12 mx-auto my-5 flex flex-row flex-wrap justify-center  overflow-x-auto">
                    {
                      isLoading ?<h1>loading....</h1>: blogs.map((blog,index)=> <Blog key={index} blog={blog}/>) 
                    }
                    </div>
                   
                  </div>
  )
}

export default AllBlogs