import React from 'react'
import que from './Vector.png'
import menu from './Frame 1000002250.png'
import left from './left-arrow.png'
import img from './Rectangle 5160.png'
import { Link } from 'react-router-dom'

const Slide = () => {
  return (
    <div className=' flex bg-[#363c43] rounded-2xl h-[35vh] w-[42vw]'>
      {/* left */}
<div>
<img className=' ml-[12px] mt-[20px]' src={que} alt=''/>
<img className=' ml-[12px] mt-[80px]' src={menu} alt=''/>
</div>

{/* right */}

<div>

{/* navbar */}

<div className=' flex'>


<div className=' bg-black text-white rounded-2xl flex pt-3 justify-center h-[55px] w-[100px] mt-3 ml-3'>Gallery</div>

<div className=' text-white bg-[#41474e] rounded-full h-[50px] w-[140px] flex justify-center pt-3 mt-3 ml-[10vw] shadow-2xl'> + ADD IMAGE</div>

<div className=' bg-[#161718] rounded-full h-[45px] w-[45px] flex justify-center mt-3.5 ml-6'>
    <img className=' h-[25px] mt-2.5' src={left} alt='' />
</div>

<div className=' bg-[#161718] rounded-full h-[45px] w-[45px] flex justify-center mt-3.5 ml-6'>
    <img className=' h-[25px] mt-2.5 rotate-180' src={left} alt='' />
</div>

</div>

{/* img */}

<div className=' flex align-middle gap-2'>
    <img className='h-[160px] w-[160px] ml-[10px] mt-[20px]' src={img} alt=''/>
    <img className='h-[160px] w-[160px] ml-[10px] mt-[20px]' src={img} alt=''/>
    <img className='h-[160px] w-[160px] ml-[10px] mt-[20px]' src={img} alt=''/>
</div>


</div>

    </div>
  )
}

export default Slide
