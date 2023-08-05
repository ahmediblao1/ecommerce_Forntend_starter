/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import './App.css'
import Signup from './Signup';
import Hedear from './components/Hedear';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {

  return(
   <div >
    <Hedear />
   <Routes>
    <Route path='register' element ={ <Signup />} />
    <Route path='Login' element = {<Login />} />
    <Route path='/' element ={<Home />} />
   </Routes>
   </div>
  ); 
}

export default App
