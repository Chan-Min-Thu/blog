import React from "react";
import { useState,useEffect } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "../../services/blogsApi";

function Update() {
  const {id} = useParams();
  const {data:blog,isFetching} = useGetSingleBlogQuery(id)
  const [UpdateBlog] = useUpdateBlogMutation(id)
  console.log(isFetching?"isFetching":blog)
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [image,setImage] = useState("")
  const navigate= useNavigate()

  useEffect(() => {
    setTitle(blog?.title)
    setDescription(blog?.description)
    setImage(blog?.image)
  }, [blog])
  

  const handleSubmit=(e)=>{
      e.preventDefault();
      const newBlog = {id:blog.id,title,description,image}
      console.log(newBlog)
      UpdateBlog(newBlog)
      navigate('/')
  }
  return (
                
    <div className="md:w-1/2 w-3/4 h-screen mx-auto mt-10 gap-5">
      <h1 className="text-blue-500 text-xl font-semibold mb-5">Update Blogs</h1>
      {isFetching ? <h1>Loading</h1> :
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="mb-1">
          <input
            type="text"
            id="base-input"
            placeholder="Blogs Title..."
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="title"
            defaultValue={blog.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            id="base-input"
            placeholder="Upload Photo Link..."
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="image"
            defaultValue={blog.image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type the description..."
            name="description"
            defaultValue={blog.description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Update
          </button>
          <Link to={`/Blogs/${id}`}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Cancle
          </button>
          </Link>
        </div>
      </form>}
    </div>
                
  );
}

export default Update;
