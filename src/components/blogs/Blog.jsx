import React from 'react' 
import {AiFillEye} from 'react-icons/ai'
import {FaTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../../services/blogsApi'

const Blog = ({blog}) => {
  const [deleteBlog] = useDeleteBlogMutation()
  return (
    <div className='w-[250px] rounded-md overflow-hidden mr-5 h-[270px] mb-5 p-2 shadow-slate-400 shadow-md'>
       <motion.img src={blog.image} className="w-full h-3/5 p-3 rounded-lg hover:scale-105" initial={{scale:0.2}} whileInView={{scale:1.05}} transition={{duration:1,delay:0.3}}/>
       <motion.p className='text-md font-normal dark:text-white' initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.4}}>{blog.title}</motion.p>
       <motion.p initial={{ipacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.4}} className='text-sm opacity-70 text-gray-700 dark:text-white h-10 overflow-hidden mb-2'>{blog.description}</motion.p>
       <div className='w-full flex flex-row justify-end'>
      <Link to={`/Blogs/${blog.id}`}>
       <AiFillEye className='text-stone-900 m-2  dark:text-white'/>
       </Link>
      
       <FaTrashAlt className="text-red-700 m-2" onClick={()=>deleteBlog(blog.id)}/>
       
      
       </div>
    </div>
  )
}

export default Blog