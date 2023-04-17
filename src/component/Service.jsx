import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const Service = () => {
  return (
    <>
     <div className='w-full  bg-[#0000001f] py-10 overflow-hidden'>

      <div className=' md:flex max-w-[1350px] justify-center m-auto' >
         <div className=' w-full md:w-2/4'>

        <h3 className=' text-4xl md:text-6xl text-center md:text-left text-white py-16 md:pl-12 font-display' style={{textShadow: '3px 5px 5px #c105ed'}}>
            My Awesome <span className=' text-fuchsia-400'>Service </span> 
        </h3>
        
      </div>
       
         

      <div className=' md:relative  '>

      

         <div className=' md:relative top-10 lg:left-16 m-auto max-w-[350px]  md:min-w-[360px] min-h-[430px]  text-white p-8 hover:border-2   border-fuchsia-700  shadow-rose-100 shadow-box md:m-5  rounded-md' data-aos="fade-left"  data-aos-offset="250" data-aos-duration="1000"  >
       <div className=" flex justify-center text-4xl" >

        <IoStarOutline/>
      

        
        </div>
            <h4 className='text-3xl py-4 font-display text-center  text-fuchsia-400'  style={{textShadow: '3px 5px 5px #c105ed'}}> Web Development</h4>
            <p className='py-4 text-lg  font-display text-left'style={{ textShadow: "3px 5px 5px #c105ed" }}>I make wesites that loves to stay over the internet using the latest technology trends. I try to write managable and scalable code so expansion is never a problem. I have knowledge about FrontEnd Development</p>
             {/* <button className='btn p-2 px-3   rounded-full'> LEARN MORE</button> */}
         
     
       </div>
       <div className=' md:relative right-[95%] lg:right-full bottom-10 max-w-[350px] min-h-[430px]  md:min-w-[360px]  text-white p-8 hover:border-2   border-fuchsia-700 shadow-rose-100 shadow-box md:mx-5 m-auto my-5 rounded-md' data-aos="fade-right"  data-aos-offset="250" data-aos-duration="1000">
       <div className=" flex justify-center text-4xl " >

        <FaWordpress/>
      

        
        </div>
            <h4 className='text-3xl py-4 font-display text-center  text-fuchsia-400' style={{textShadow: '3px 5px 5px #c105ed'}}>Custom Management System</h4>
            <p className='py-4 text-lg  font-display text-left'style={{ textShadow: "3px 5px 5px #c105ed" }}>Are you someone who wants to make a blog &nbsp;or some website with frequent changes in content ? Custom Management System &nbsp; (CMS) is the solution. It helps in easy editing and handling of content</p>
             {/* <button className='btn p-2 px-3  rounded-full m-auto'> LEARN MORE</button> */}
         
     
       </div>
       <div className=' md:relative bottom-64  max-w-[350px]  md:min-w-[360px] max-h-[430px] text-white p-8 hover:border-2   border-fuchsia-700 shadow-rose-100 shadow-box md:mx-5 m-auto my-5 rounded-md' data-aos="fade-left"  data-aos-offset="250" data-aos-duration="1000" >
       <div className=" flex justify-center text-4xl" >

<IoSettingsOutline/>



</div>
            <h4 className='text-3xl py-4 font-display  text-fuchsia-400 text-center' style={{textShadow: '3px 5px 5px #c105ed'}}>Hosting & Maintence</h4>
            <p className='py-4 text-lg  font-display text-left'style={{ textShadow: "3px 5px 5px #c105ed" }} >Yay, we made a website ! That doesn't mean it is live over the internet and people are ready &nbsp; to consume your website. No problem I got you covered, I am there for all the after work getting a domain,&nbsp; getting a cheap hosting, small changes that might have creeped into your mind after you made your site live. I am with you from start to end</p>
             {/* <button className='btn p-2 px-3  rounded-full'> LEARN MORE</button> */}
         
     
       </div>
       
       </div>
       </div>
          </div>
    </>
  )
}

export default Service
