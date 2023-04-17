import React from "react";
import { FiGithub, FiLink2} from "react-icons/fi";
const ProjectComonent = (props) => {

  return (
    

      <div className=" max-w-[300px] min-w-[350px] min-h-[364px]  text-white hover:border-2 hover:border-fuchsia-700  hover:shadow-rose-100 shadow-box rounded-md ">
        <div className=" max-w-sm   bg-[#a26fbc]  hover:border-fuchsia-700 hover:shadow-rose-100 hover:shadow-box "  data-aos="flip-left"  data-aos-offset="300" data-aos-duration="2000">
          <img src={props.image} alt="" srcSet="" className="rounded-xl  opacity-20 hover:opacity-100" />
        </div>
        <div  data-aos="flip-right"  data-aos-offset="250" data-aos-duration="2000">

        <h4
          className="text-3xl py-8 font-display text-center"
          style={{ textShadow: "3px 5px 5px #c105ed" }}
        >
          {props.title}
        </h4>
        <p className="  text-lg p-4 font-display"style={{ textShadow: "3px 5px 5px #c105ed" }}>
         {props.description}
        </p>
        

        {props.technology.map((item , index)=>{
          return (
             
            <button className="btn p-1 px-3 ml-5 rounded-md border" key={index}  >
              {item}
           </button>
          )
        })}     

        <div className="my-7">

        <a href={props.githubLink} target="_blank">

        <button className="btn p-2 ml-5  rounded-full border ">
          <FiGithub/>
        </button>
        </a>
        <a href={props.liveLink} target="_blank">

        <button className="btn p-2  ml-5  rounded-full border ">
          <FiLink2/>
        </button>
        </a>
      </div>
                </div>
        </div>
  );
};

export default ProjectComonent;
