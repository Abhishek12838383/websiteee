import React from 'react'
import que from './Vector.png'
import menu from './Frame 1000002250.png'
import left from './left-arrow.png'
import Imgover from './imgover'
import { Link } from 'react-router-dom'


const Secondwidget = () => {


  
  return (
    <div className=' flex bg-[#363c43] rounded-2xl h-[35vh] w-[40vw] pr-2'>
      {/* left */}
<div>
<img className=' ml-[12px] mt-[20px]' src={que} alt=''/>
<img className=' ml-[12px] mt-[80px]' src={menu} alt=''/>
</div>

{/* right */}

<div>

{/* navbar */}

<div className=' flex items-center'>


<div className=' bg-black text-white rounded-2xl flex pt-3 justify-center h-[7vh] w-[8vw] mt-3 ml-3'>Gallery</div>

<div className=' text-white bg-[#41474e] rounded-full h-[6vh] w-[9vw] text-sm font-medium flex justify-center pt-3 mt-3 ml-[10vw] shadow-white shadow-[-1px_-1px_5px_0px_#ffffff]'> + ADD IMAGE</div>

<Link to=''>
<div className=' bg-[#161718] rounded-full h-[6vh] w-[3vw] flex justify-center mt-3.5 ml-5 shadow-blue-300 shadow-2xl'>
    <img className=' h-[25px] mt-2.5' src={left} alt='' />
</div>
</Link>


<Link>
<div className=' bg-[#161718] rounded-full h-[6vh] w-[3vw] flex justify-center mt-3.5 ml-2  shadow-blue-300 shadow-2xl'>
    <img className=' h-[25px] mt-2.5 rotate-180' src={left} alt='' />
</div>
</Link>


</div>

{/* img */}

<div className=' flex align-middle gap-2'>
    <Imgover/>
    <Imgover/>
    <Imgover/>
</div>


</div>

    </div>
  )
}

export default Secondwidget
