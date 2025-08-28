import React from 'react'

import Agence from './pages/agence'
import Home from './pages/home'
import Projects from './pages/projects'
import {  Router, Routes, Route, Link } from "react-router-dom";



const App = () => {
  return (
    <div className=' text-white'>
      <Link></Link>

    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/agence' element = {<Agence/>} />
      <Route path = '/projects' element = {<Projects/>}/>

    </Routes>
    </div>
  )
}

export default App
