import { useState } from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Blog from "./pages/blog/Blog"
import AllBlogs from "./pages/allblogs/AllBlogs"
import BlogInfo from "./pages/bloginfo/BlogInfo"
import Adminlogin from "./pages/admin/adminlogin/Adminlogin"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Nopage from "./pages/nopage/Nopage"

function App() {
  return (
    // <div className="text-center text-2xl font-bold text-blue-600">
    //   Blog Website
    // </div>

  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/allblogs' element={<AllBlogs/>} />
        <Route path='/bloginfo/:id' element={<BlogInfo/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/*' element={<Nopage/>} />
      </Routes>
    </Router>
  </div>


    
  );
}

export default App;

