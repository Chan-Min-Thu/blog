import React,{useState} from 'react'
import  { Link,useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAddBlogMutation } from '../../services/blogsApi'

const Create = () => {
  const navigate=useNavigate()
  const [title,setTitle] = useState('')
  const [description,setDesc] = useState('')
  const [image,setImage] = useState('')
  const [addNewBlog] = useAddBlogMutation()
  const handleSubmit =(e)=>{
      e.preventDefault();
      const newBlog = {
        id:Date.now(),
        title,description,image
      }
      addNewBlog(newBlog)
      navigate('/Blogs')
  }

  return (
    <div className="w-3/4 md:w-1/2 h-screen mx-auto mt-10 gap-5">
    <motion.h1 
    initial={{x:-200,opacity:0}}
    animate={{x:0,opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5,delay:0.3}}
    className="text-blue-500 text-xl font-semibold mb-5">Create Blogs</motion.h1>
    <motion.form className='flex flex-col gap-5'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:0.2}}
    onSubmit={handleSubmit}>
      <div className="mb-1">
        <input
          type="text"
          id="base-input"
          placeholder="Blogs Title..."
          className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name='title'
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <input
          type="text"
          id="base-input"
          placeholder="Upload Photo Link..."
          className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="image"
          onChange={(e)=>setImage(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type the description..."
          name='desc'
          onChange={(e)=>setDesc(e.target.value)}
        ></textarea>
      </div>
      <div>
        <motion.button
          initial={{x:-200,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.8,delay:0.3}}
          type="submit"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Upload
        </motion.button>
        <Link to='/allBlogs'>
        <motion.button
          initial={{x:200,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.8,delay:0.3}}s
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Cancle
        </motion.button>
        </Link>
      </div>
    </motion.form>
  </div>
  )
}

export default Create