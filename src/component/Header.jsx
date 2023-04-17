import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Header = () => {
  const ref = useRef();
  const [isopen, setopen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 550;

  const closeNav = ()=>{
    setopen(!isopen) ;
  }

  useEffect(() => {
    const closeMenu = (e) => {
      if (isopen  && !ref.current.contains(e.target)) {
        setopen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isopen]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width < breakpoint) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <>
      {isMobile ? (
        <div className="bg-[#0000001f]">
          <div className="flex items-center py-5">
            <h4
              className="text-5xl text-white ml-5 mr-2"
              onClick={closeNav}
            >
              {isopen ? <AiOutlineClose /> : <FiMenu />}
            </h4>
            <div className="w-16">
              <img className=" w-full" src={logo} alt="logo" />
            </div>
          </div>
          {isopen ? (
            <div className="w-full bg-[#000000c4] absolute">
              <ul
                className="relative  bg-white  h-screen w-60 z-10" 
                ref={ref}
              >
                 <li className="px-6 pb-2  pt-6 text-2xl text-fuchsia-900 ">
    
    <NavLink to="/" onClick={closeNav}> Home</NavLink>
  </li>
  <li className="px-6 pb-2  pt-6 text-2xl ">
                <NavLink to="/about" onClick={closeNav}> About</NavLink>
                </li>
                <li className="px-6 pb-2  pt-6 text-2xl  ">
                <NavLink to="/project" onClick={closeNav}> Project</NavLink>
              </li>
                <li className="px-6 pb-2  pt-6 text-2xl ">
                <NavLink to="/contact" onClick={closeNav}> Contact</NavLink>
              </li>
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-grow  h-20 items-center">
          <div className="  w-16   ml-16 mt-3">
            <img className=" w-full" src={logo} alt="logo" />
          </div>
          <div className="sx:hidden flex justify-end  w-11/12">
            <ul className=" flex text-fuchsia-400  text-xl  pr-10 text-center">
              <li className="nav-list ">
    
                <NavLink to="/"> Home</NavLink>
              </li>
              <li className="nav-list  ">
                <NavLink to="/about"> About</NavLink>
                </li>
              <li className="nav-list">
                <NavLink to="/project"> Project</NavLink>
                </li>
              <li className="nav-list">
                <NavLink to="/contact"> Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
