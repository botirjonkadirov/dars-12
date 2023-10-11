import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {FaSun, FaMoon} from 'react-icons/fa6'

function getTheme () {
  return localStorage.getItem('theme') || 'light'
}
function Navbar() {
  const [mode, setMode] = useState(getTheme())

  useEffect(()=>{
    document.documentElement.dataset.theme= mode
    localStorage.setItem('theme', mode)
   },[mode])
  const changeMode = ()=>{
     setMode((p)=>{
    
      return p=='light'? 'dark':'light'
     })
  }
  return (
   <div className='bg-lime-500'>
     <div className='container flex justify-around py-6 '>
        <Link className='btn select-secondary' to='/'>Recipe</Link>
        <span className='text-2xl text-orange-500 cursor-pointer' onClick={changeMode}>{mode=='light'?<FaMoon/>:<FaSun/>}</span>
        <Link className='btn bg-green-500' to='create'>Create</Link>
    </div>
   </div>
  )
}

export default Navbar