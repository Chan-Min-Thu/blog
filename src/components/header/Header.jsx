import React,{useState,useEffect} from "react";
import {FaBlog} from 'react-icons/fa'
import {BiX,BiSun} from "react-icons/bi"
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdDarkMode} from 'react-icons/md'
import { motion } from "framer-motion";
import {Link,NavLink} from "react-router-dom"
import { useGetBlogsQuery } from "../../services/blogsApi";
import SearchList from "../blogs/SearchList";


const linkStyles=({isActive})=>{
  return{
    background:isActive?"#9fa3ab":"none",
    padding:isActive?"2px 5px":'none'
    
  }
}
const Header = () => {
  const [open,setOpen] = useState(false)
  const [theme,setTheme] = useState('light')
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [searchResult,setSearchResult] = useState('')
  const { data:blogs,isLoading } = useGetBlogsQuery();
  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }},
    [theme])
  
  const darkChange = ()=>{
   return setTheme(theme === "light" ? "dark" : 'light')
  }
  const handleSearch = (s)=>{
    setFilteredBlogs(blogs.filter(blog=>blog.title.toLowerCase().includes(s)))
  }
 useEffect(()=>{
   if(searchResult !==""){
      handleSearch(searchResult.toLowerCase())
   }else{
      setFilteredBlogs([])
   }
 },[searchResult])
  console.log(filteredBlogs)
  return (
    <div className="sticky top-0 z-30">
     <nav className="bg-white dark:bg-gray-900 shadow-slate-300 dark:shadow-slate-500 border-b-slate-700 sticky top-0 shadow-md  border-gray-200  px-2 sm:px-4 py-2.5 rounded">
        <div className="flex flex-wrap items-center justify-between mx-auto ">
          <Link to='/' className="flex items-center">
            <FaBlog className="text-2xl text-red-600 mr-1"/>
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Blogs
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
            {theme === 'dark'?<MdDarkMode className="text-2xl" onClick={darkChange}/>:<BiSun className="text-3xl" onClick={darkChange}/>}
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                name='title'
                onChange={(e)=>setSearchResult(e.target.value)}
                id="search-navbar1"
                className="block w-full p-2 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className=" hidden md:block text-gray-500 dark:text-gray-400 ml-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
            {theme === 'dark'?<MdDarkMode className="text-xl" onClick={darkChange}/>:<BiSun className="text-2xl" onClick={darkChange}/>}
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              onClick={()=>setOpen(!open)}
              type="button"
              className="inline-flex  items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {
                open ?<BiX className="text-4xl"/> :<RxHamburgerMenu className="text-3xl"/>
              }
             
            </button>
          </div>
          <div
            className={`items-center justify-between ${ open ? "block":"hidden"} duration-100 w-full md:flex md:w-auto md:order-1`}
            id="navbar-search">
          <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >                  fill="currentColor"
                  viewBox="0 0 20 20"

                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name='title'
                onChange={(e)=>setSearchResult(e.target.value)}
                id="search-navbar2"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <div className="z-50 fixed  bg-gray-500 md:top-14 md:w-[250px] top-28 w-11/12 p-auto right-5 overflow-scroll scrollbar-thin md:right-20">
            {filteredBlogs.length>0?filteredBlogs.map((filteredBlogs,index)=><SearchList key={index}  setFilteredBlogs={setFilteredBlogs} filteredBlogs={filteredBlogs}/>):null}
            </div>
            <motion.ul
            initial={{opacity:0,display:'hidden'}}
            whileInView={{opacity:1,display:"flex"}}
            transition={{duration:1,delay:0.3}}
             className={`flex flex-col p-4  border md:relative text-lg border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
              <NavLink
                  to="/"
                  style={linkStyles}
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allBlogs"
                  style={linkStyles}
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  style={linkStyles}
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Create
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Login"
                  style={linkStyles}
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Log In
                </NavLink>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Header;
