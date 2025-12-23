import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className=' ml-2 nav rounded-lg '>
    <div className='inner'> 
         <div className='cursor-pointer hover:bg-blue-300 pl-2 pr-3 rounded-t-lg '>Home</div>
        <div className='cursor-pointer hover:bg-blue-300 pl-2 pr-3 ' w-100vh>About</div>
        <div className='cursor-pointer hover:bg-blue-300 pl-2 pr-3 ' w-100vh>Projects</div>
        <div className='cursor-pointer hover:bg-blue-300 pl-2 pr-3 rounded-b-lg' w-100vh>Contact</div>
    </div>
       <div className='inner1'>
        <div className='p-3'>Elikana</div>
       </div>
    </div>
  )
}

export default Navbar