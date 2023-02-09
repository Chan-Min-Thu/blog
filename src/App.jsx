// import { useState } from 'react'
// import { FaRoad } from 'react-icons/fa'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Create from './components/create/Create'
import Blog from './components/blogs/Blog'
import AllBlogs from './components/blogs/AllBlogs'
import Detail from './components/blogs/Detail'
import Update from './components/create/Update'
import Login from './components/login/Login'
import Register from './components/login/Register'


function App() {
 
  return (
    <div className="bg-white dark:bg-gray-900 h-auto m-auto">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}></Route>
        <Route path='/allBlogs' element={<AllBlogs/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/Blogs/:id' element={<Detail/>}></Route>
        <Route path='/Blogs/edit/:id' element={<Update/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
