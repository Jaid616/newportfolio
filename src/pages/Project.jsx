import React from 'react'
import ProjectComonent from '../component/ProjectComonent'
import dashboardImage from "../assets/dashboard.png"
import covidTrackerImage from "../assets/covidTracker.png"
import formdataImage from "../assets/formdata.png"
import portfolioImage from "../assets/portfolio.png"
import ipTrackerImage from "../assets/IPTracker.png"
import portfolioNew from "../assets/newport.png"
import movix from "../assets/movix.png"
const Project = () => {
  return (
   <>
   
      <div className=" max-w-[1050px m-auto ">
        <h3
          className=" text-5xl text-white  py-20  font-display text-center"
          style={{ textShadow: "3px 5px 5px #c105ed" }}
        >
          My <span className='text-fuchsia-400'>Project</span> 
        </h3>
      </div>
      <div className='flex gap-12 md:gap-16 justify-center flex-wrap flex-grow '>
      <ProjectComonent image = {movix} 
                       title = "Movix Project" 
                       description = "A Dynamic website for upcoming and latest releases movies and TV shows information like released Date , Rating , Category , Casting and videos Trailer using The Movie Database." 
                       technology = {["React" , "SCSS"  ]}
                       githubLink = "https://github.com/Jaid616/movix" 
                       liveLink = "https://movix-fn7ha2glv-jaid616.vercel.app/"/>   
      <ProjectComonent image = {dashboardImage} 
                       title = "User Dashboard " 
                       description = "In this project, user can register yourself. After Registration user can log in with own email id and password. if the user want to change own password then user can request for change password after login." 
                       technology = {["React" , "Material UI" , "Node"]}
                       githubLink = "https://github.com/Jaid616/dashboard" 
                       liveLink = "https://dashboard-4khu.onrender.com/"/>
<ProjectComonent image = {portfolioNew} 
                       title = "My Porfollio Site" 
                       description = "Got hold of this awesome library called React, (I consider it more as a framework) . Therefore had a try with this and made out a basic clean portfolio site out of it. Hope you &nbsp; all like it ." 
                       technology = {["React" , "TailWind" ]}
                       githubLink = "https://github.com/Jaid616/newportfolio" 
                       liveLink = "/"/>  
 
<ProjectComonent image = {portfolioImage} 
                       title = "My Porfollio Site" 
                       description = "Got hold of this awesome library called React, (I consider it more as a framework) . Therefore had a try with this and made out a basic clean portfolio site out of it. Hope you &nbsp; all like it" 
                       technology = {["React" , "CSS3" ]}
                       githubLink = "https://github.com/Jaid616/Portfolio" 
                       liveLink = "https://jaidnasim.vercel.app/"/>
               
<ProjectComonent image = {ipTrackerImage} 
                       title = "IP Tracker" 
                       description = "This method of tracking can have very broad results and can sometimes only get an accurate result with some input from the user about their location.In some countries laws are in place that state a service can only track you as far as your country without your consent. If the user consents then the service can view your ISP's logs ." 
                       technology = {["React" , "CSS3" ]}
                       githubLink = "https://github.com/Jaid616/IP-Tracker" 
                       liveLink = "https://jaidnasim.000webhostapp.com/IPaddress-Tracker/"/> 
     
                              <ProjectComonent image = {formdataImage} 
                       title = "Form Validation" 
                       description = "In this project, user can submit form after validation all inputs. After submit, all data store on database with the help of Node js and mongoDB ." 
                       technology = {["React" , "Node" , "CSS"]}
                       githubLink = "https://github.com/Jaid616/formdata-frontend" 
                       liveLink = "https://frontend-kajz.onrender.com/"/>                     
                                            

      
      </div>
    
   
   </>
  )
}

export default Project
