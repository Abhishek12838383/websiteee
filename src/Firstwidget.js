import React, { useState } from 'react'
import que from './Vector.png'
import menu from './Frame 1000002250.png'
import slide from './Rectangle 39335.png'
import About from './About'
import Experience from './Experience'
import Rec from './Rec'
import './index.css'
import { NavLink ,Route,Routes} from 'react-router-dom'


const Firstwidget = () => {


  return (
    <div className=' flex bg-[#363c43] rounded-2xl h-[34vh] w-[40vw] pb-2'>
  
      {/* left */}
<div>
<img className=' ml-[12px] mt-[20px]' src={que} alt=''/>
<img className=' ml-[12px] mt-[80px]' src={menu} alt=''/>
</div>

{/* right */}

<div className=' ml-[0.8vw]'>

{/* navbar */}

<div className=' bg-black rounded-2xl flex h-[54px] w-[31.5vw] mt-2 ml-3 max-xl:justify-center'>
    <NavLink to='/'><button className=' text-gray-400 text-base flex items-center justify-center  w-[150px] h-[48px] '>About Me</button></NavLink>
    <NavLink to='/exp'><button className=' text-gray-400 text-base flex items-center justify-center w-[150px] h-[48px] '>Experiences</button></NavLink>
    <NavLink to='/rec'><button className=' text-gray-400 text-base flex items-center justify-center w-[150px] h-[48px] '>Recommended</button></NavLink>
</div>
<Routes>
      <Route path="/" element={<About />} />
      <Route path="/exp" element={<Experience />} />
      <Route path="/rec" element={<Rec />} />
      </Routes>



</div>

<div className=' mt-[12vh] ml-8'>
  <img src={slide} alt=''/>
</div>

    </div>
  )
}

export default Firstwidget
