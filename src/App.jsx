import { useState } from 'react';
import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import Blog from "./pages/blog/Blog"
import AllBlogs from "./pages/allblogs/AllBlogs"
import BlogInfo from "./pages/bloginfo/BlogInfo"
import Adminlogin from "./pages/admin/adminlogin/Adminlogin"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Nopage from "./pages/nopage/Nopage"
// import Home from "./pages/home/Home"
import Home from './pages/home/Home';

import CreateBlog from './pages/admin/createBlog/CreateBlog';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ....DB 
import {getDatabase} from 'firebase/database'
// import {app} from './firebase'
// import { app } from './firebase/FirebaseConfig';

// const db = getDatabase(app)

// import { Toaster } from 'react-hot-toast';
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
        <Route path='/createblog' element={<CreateBlog />} />
        <Route path='/*' element={<Nopage/>} />
      </Routes>
      {/* <Toaster/> */}
    </Router>
  </div>


    
  );
}

export default App;

