import React from 'react'
import {FiTwitter , FiFacebook , FiGithub ,FiLinkedin , FiInstagram} from 'react-icons/fi'
const SocialMedia = () => {
  return (
   <>
    <a href="https://twitter.com/jaidnasim1" target='_blank'>

<button className="btn p-2  rounded-full border ">
      <FiTwitter />
    </button>
</a>
<a href="https://www.facebook.com/jaid.nasim.39" target='_blank'>

    <button className="btn p-2  ml-5  rounded-full border ">
      <FiFacebook />
    </button>
</a>
<a href="https://github.com/Jaid616/" target='_blank'>

    <button className="btn p-2  ml-5  rounded-full border ">
      <FiGithub />
    </button>
</a>
    <a href="https://www.linkedin.com/in/jaid-nasim-148113240/" target='_blank'>

    <button className="btn p-2  ml-5  rounded-full border ">
      <FiLinkedin />
    </button>
    </a>
<a href="https://www.instagram.com/jaidnasim/" target='_blank'>


    <button className="btn p-2  ml-5  rounded-full border ">
      <FiInstagram />
    </button>
</a>
   
   </>
  )
}

export default SocialMedia
