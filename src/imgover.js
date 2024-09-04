import {React,useState} from 'react'
import img from './Rectangle 5160.png'
import img1 from './Rectangle 5160 (1).png'

const Imgover = () => {

    const[image,setimage]=useState(img);
const img2= img;
    const changeimg= img1;

  return (
    <div>
       <img className='h-[19vh] ml-[10px] mt-[20px] cursor-pointer  hover:scale-110 hover:-rotate-12 duration-75 ' onMouseEnter={()=>{ setimage(changeimg)}} onMouseLeave={()=>{setimage(img2)}} src={image} alt=''/>
    </div>
  )
}

export default Imgover
