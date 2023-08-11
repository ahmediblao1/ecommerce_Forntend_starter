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
import EditUser from './EditUser';

function App() {

  return(
   <div >
   <Routes>
    <Route path='register' element ={ <Signup />} />
    <Route path='Login' element = {<Login />} />
    <Route path='/' element ={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/Dashboard' element = {<Dashboard />} >
      <Route  exact path='users' element ={<Users />} />
       <Route path='users/:id' element ={<EditUser />} />
    </Route>
   </Routes>
   </div>
  ); 
}

export default App
