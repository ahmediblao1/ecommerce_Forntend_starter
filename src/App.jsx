/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import './Dashboard.css'
import Signup from './Signup';
import Hedear from './components/Hedear';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Users from './Users';

function App() {

  return(
   <div >
   <Routes>
    <Route path='register' element ={ <Signup />} />
    <Route path='Login' element = {<Login />} />
    <Route path='/' element ={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/Dashboard' element = {<Dashboard />} >
      <Route path='users' element ={<Users />} />
    </Route>
   </Routes>
   </div>
  ); 
}

export default App
