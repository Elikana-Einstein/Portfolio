import React, { useState } from 'react'
import './dot.css'
const Dot = () => {
    const[name,setName]=useState('')
    
  return (
    <div className='flex flex-col justify-between h-screen p-3'>  
    {Array.from({length:8}).map(() => (
    <div className='flex pt-2 justify-between '>
        {Array.from({length:20}).map((_,index)=>(
            <div className='parent justify-center flex items-center '>
                <div className='parent2 justify-center flex items-center'>
                <div onMouseEnter={()=>setName('hover')} onMouseLeave={()=>setName('')} key={index} className= {`dots ${name}`}></div>
                </div>
            </div>
        ))}
    </div>))}
    </div>
  )
}

export default Dot