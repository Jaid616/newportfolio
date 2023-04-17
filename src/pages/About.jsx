import React from 'react'
import Chart from '../component/Chart'

const About = () => {
  return (
   <>
    <div className='w-full '>
      <div className=' max-w-[1050px m-auto '>
      <h3 className=' text-5xl  text-white pt-20 pb-10  font-display text-center' style={{textShadow: '3px 5px 5px #c105ed'}}>
            About <span className=' text-fuchsia-400'>Me</span>
        </h3>  
        <div className='grid sm:grid-cols-2 gap-2  max-w-[1250px] m-auto items-center'>

        
      <div className=' mt-16  h-[80%]   bg-contain bg-no-repeat bg-portfolio sm:block hidden'>

        </div>
        <div className=' p-4 text-2xl'>
        <p className=' text-white font-display p-4'>I am a Full-stack developer based in Gorakhpur, India. I am done BCA from Chhatrapati Shahu Ji Maharaj University Kanpur. I am actively looking for opportunities that will help me in growing/building my tech stack.</p>  
        <p className=' text-white font-display p-4'>I am still a learner who still needs to learn lot of cool things. Please ping me up if you have anything interesting or want to share a powerful framework, a useful library.</p>
        <p className=' text-white font-display p-4 '>I love to code, watch football and travel if you were missing on it today.</p>
      </div>
      </div>
          </div> 

    </div>
   <div className=' w-full m-auto'>
   <h3 className=' text-5xl  text-white py-20  font-display text-center' style={{textShadow: '3px 5px 5px #c105ed'}}>
            My <span className='text-fuchsia-400'> Skill </span>
        </h3>
      
   <div className="flex-wrapper">
   <Chart name="JAVASCRIPT" percentage="65" color = "fuchsia"/>
   <Chart name="JAVA"  percentage="30" color = "fuchsia"/>
   <Chart name ="REACT" percentage="60" color = "orange"/>
   <Chart name ="NODE" percentage="45"  color = "orange"/>
   <Chart name ="MONGO_DB" percentage="50"  color = "orange"/>
   <Chart name ="HTML5" percentage="85" color = "orange"/>
   <Chart name ="CSS3" percentage="68"  color = "green"/>
   <Chart name ="BOOTSTRAP" percentage="80" color = "green"/>
   <Chart name ="TAILWIND" percentage="80" color = "green"/>
   <Chart name ="MATERIAL_UI" percentage="60" color = "green"/>
  
   <Chart name ="PHOTOSHOP" percentage="50"  color = "blue"/>
   <Chart name = "PREMIRE PRO" percentage="50"  color = "blue"/>

  
 


 
</div>
</div>
   </>
  )
}

export default About
