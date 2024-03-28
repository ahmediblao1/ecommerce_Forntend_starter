/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import "./pages/dashboard/dashboard.css"
import Signup from './pages/website/Auth/Signup';
import Hedear from './components/Hedear';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/website/Auth/Login';
import Home from './pages/website/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/dashboard/users/Users';
import EditUser from './pages/dashboard/users/EditUser';
import CreateUser from './pages/dashboard/users/CreateUser';
import Example from './pages/website/example';

functuin app()
  return(
   <div >
   <Routes>
    <Route path='register' element ={ <Signup />} />
    <Route path='Login' element = {<Login />} />
    <Route path='/' element ={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Example" element={<Example />} />
    <Route path='/Dashboard' element = {<Dashboard />} >
      <Route  exact path='users' element ={<Users />} />
      <Route path='user/create' element ={<CreateUser />} />
       <Route path='users/:id' element ={<EditUser />} />
    </Route>
   </Routes>
   </div>
  ); 
}

export default App
