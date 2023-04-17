import React, { useState } from 'react'
import contact from "../assets/contact.svg"
import axios from 'axios'
const Contact = () => {
  const [data , setdata ] = useState({

    name:'',
    email:'',
    msg:''
  })
const [isSubmit , setisSubmit] = useState(false)
const [loading , setLoading] = useState(false);
const [responsemsg , setresponsemsg] = useState({
  msg:"",
  status:""
});


  const onChangeHandlers =(e)=>{
    
     setdata ({
      ...data,
       [e.target.name] : e.target.value
     })
  }

  const submitForm = async (e)=>{
    setLoading(true);
    e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5000/sendMessage",
    
      {
        name: data.name,
        email: data.email,
        msg: data.msg,
        
      },
       

    
    ) 
    const resData = response.data;
    setLoading(false);
    setisSubmit(true);
    console.log(resData)
    setresponsemsg({
      msg:resData.message,
      status:'text-green-500'
     })
   
  } catch (error) {
     setLoading(false);
     setisSubmit(true);
     setresponsemsg({
      msg:error.response.data.message,
      status:'text-red-500'
     })
    
  }
 
   

   


     
  }
  return (
    <>

    {loading?<div className='loader-screen flex'>

<div className="loader"></div>  
 </div>:<div className=' w-full bg-[#0000001f] '>
          <div className='grid gap-10 grid-cols-1 md:grid-cols-2 max-w-[1050px] w-10/12 text-white items-center m-auto '>
            <div className='w-[50%] hidden md:block'>
              
                   <img src={contact} alt="contactlogo" />
          
              


            </div>
            <div>
           <h3 className=' text-5xl  text-white my-10 font-display text-center' style={{textShadow: '3px 5px 5px #c105ed'}}>Get in Touch</h3>

            {isSubmit?<p className={ `py-3 text-xl ${responsemsg.status}`}>{responsemsg.msg}</p>:null}
           <form onSubmit={submitForm}>

           <input type="text" name="name" value={data.name} placeholder='Name'  className='w-full p-2 placeholder:italic bg-[#0000001f]   border border-gray-500 outline-none  focus:border-black' onChange={onChangeHandlers}  />
           <input type="email" name="email" value={data.email} placeholder='Email' required className='w-full p-2 my-4 placeholder:italic bg-[#0000001f]  border border-gray-500 outline-none focus:border-black' onChange={onChangeHandlers} />
           <textarea name="msg" id="" cols="30" rows="10" placeholder='Message' value={data.msg} required className='w-full p-2 placeholder:italic bg-[#0000001f] border border-gray-500 outline-none  focus:border-black' onChange={onChangeHandlers}></textarea>
           <input type="submit" value="Send Message" className='btn p-3 px-6 my-8' />

           </form>
    

            </div>
          </div>

       

     </div>}
    
    
    </>
  )
}

export default Contact
