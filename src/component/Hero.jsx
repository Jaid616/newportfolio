import React from 'react'

import { NavLink } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const Hero = () => {
  return (
    <>
     <div className='w-full  bg-heroBg ' >

        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1050px] w-10/12  m-auto items-center h-[90vh]">

          <div>
          <h3 className=' text-4xl md:text-6xl text-white lg:py-1 lg:text-5xl  font-display' style={{textShadow: '3px 5px 5px #c105ed'}}>
            Hi! I'm 
</h3>
<h3 className=' text-4xl md:text-6xl  font-display md:py-4 lg:py-1 lg:text-5xl text-fuchsia-400' style={{textShadow: '3px 5px 5px #c105ed'}}>
  Jaid Nasim 
</h3>
<h3 className=' text-4xl md:text-6xl  text-white py-2 md:py-4 lg:py-2 lg:text-5xl font-display' style={{textShadow: '3px 5px 5px #c105ed'}}>
           Full Stack Developer
</h3>
 <div className='my-6 font-display '>
  <NavLink to="/about">

    <button className='btn p-2 px-7 md:text-lg text-white rounded-full m-auto border '>About Me</button>
  </NavLink>
   
 </div>
<div className='flex py-2 text-white'>


     <SocialMedia/>
    </div>
   
   
            </div>
            <div className=' my-16  h-[65vh]  bg-contain bg-no-repeat bg-portfolio hidden lg:block'  data-aos="fade-down"  data-aos-offset="10" data-aos-duration="2000">
       
      
     
 
   </div>

        </div>
    
     </div>
    
    </>
  )
}

export default Hero
