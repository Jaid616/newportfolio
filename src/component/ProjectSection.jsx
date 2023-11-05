import React from 'react'
import { NavLink } from 'react-router-dom'
import dashboardImage from "../assets/dashboard.png"
import portfolioImage from "../assets/portfolio.png"
import movix from "../assets/movix.png"
import caratgliz from "../assets/caratgliz.png"
import stageticket from "../assets/stageticket.png"
const Project = () => {
  return (
   <>
     <div className='w-full py-20'>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-10/12 max-w-[1050px] m-auto">
       <div className=' max-w-sm  my-5'>

<h3 className=' text-5xl  text-white py-4 mb-6 font-display' style={{textShadow: '3px 5px 5px #c105ed'}}>
    My Latest <span className=' text-fuchsia-400'>Project</span> 
</h3>
<NavLink to="/project">

  <button className='btn p-2 px-4  text-white rounded-full  font-display hidden md:block border '> View all projects</button>
</NavLink>
</div>
<div className=' max-w-sm  border-2  bg-[#a26fbc] border-fuchsia-700  shadow-rose-100 shadow-box m-5  rounded-md '  data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="1000">
       
           <img src={caratgliz} alt="" srcSet="" className='  opacity-20 hover:opacity-100' />
         
     
       </div>

       <div className=' max-w-sm  border-2  bg-[#a26fbc] border-fuchsia-700  shadow-rose-100 shadow-box m-5  rounded-md '  data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="1000">
       
           <img src={stageticket} alt="" srcSet="" className='  opacity-20 hover:opacity-100' />
         
     
       </div>
<div className=' max-w-sm  border-2  bg-[#a26fbc] border-fuchsia-700  shadow-rose-100 shadow-box m-5  rounded-md '  data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="1000">
       
           <img src={dashboardImage} alt="" srcSet="" className='  opacity-20 hover:opacity-100' />
         
     
       </div>
       <div className=' max-w-sm  border-2  bg-[#a26fbc]  border-fuchsia-700  shadow-rose-100 shadow-box m-5  rounded-md' data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="1000">
       
       <img src={portfolioImage} alt="" srcSet="" className='  opacity-20 hover:opacity-100' />
     
 
   </div>
   <div className=' max-w-sm  border-2  bg-[#a26fbc]  border-fuchsia-700  shadow-rose-100 shadow-box m-5  rounded-md ' data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="1000">
       
           <img src={movix} alt="" srcSet="" className='  opacity-20 hover:opacity-100' />
         
     
       </div>
       <NavLink to="/project">

       <button className='btn p-2 px-4 my-6 text-white rounded-full m-auto font-display block md:hidden border '> View all projects</button>   
       </NavLink>
      


     </div>

       </div>
   
   </>
  )
}

export default Project
