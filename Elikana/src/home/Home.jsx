import React from 'react'
import Dot from '../modals/Dot'
import './home.css'
import Name from '../modals/Name'
import Navbar from '../navbar/Navbar'
const Home = () => {
  return (
    <div className="home w-full h-screen ">
      <div>
        <div className='name flex  top-[32%] left-[20%] justify-center'>
        <Name/>
        </div>
        <div className='top-[50%] z-1 absolute'>
          <Navbar/>
        </div>
        <Dot />

      </div>
    </div>
  )
}

export default Home