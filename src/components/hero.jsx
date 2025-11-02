import logo from '../assets/images/Full logo.png';
import {  useState } from "react";

export default function Hero() {

const [toggle, settoggle] = useState(false);

   const navLink = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "resource", title: "Resources" },
    { id: "contact", title: "Contact" },
    { id: "partnership", title: "Partnership" },
  ];


  return (
   <div className='xl:bg-hero md:bg-hero-tab bg-opacity-20 bg-blend-darken bg-[#7BCFE9] max-sm:bg-hero-mobile  bg-cover max-sm:bg-center bg-no-repeat w-screen h-screen max-sm:h-[900px] '>
      
      {/* Navbar section */}
     
      {/* desktop logo, link and button */}
      <div className='container m-auto hidden lg:block '> 
      <div className=" flex-wrap flex items-center justify-between  ">
        <div>
          <img src={logo} className='w-24'/>
        </div>
        
        <div className="flex items-center gap-[30px] flex-wrap">
          {navLink.map((link) => (
            <ul>
              <li className="text-black" key={link.id} >
               <a href={`#${link.id}`}> {link.title}</a>
              </li>
            </ul>
          ))}
          <button className="btn-yellow btn">Join the movement</button>
        </div>
      </div>
    </div>



{/* mobile */}
     <div className="lg:hidden  w-full relative  justify-between flex container  text-center ">
       <div>
          <img src={logo} className='w-16'/>
        </div>
        <div
          className=" z-50 absolute right-6 size-7  text-white "
          onClick={() => settoggle((prev) => !prev)}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mt-[-3px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mt-[-3px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>

        {toggle && (
          <div>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              onClick={() => settoggle(false)}
              onWheel={() => settoggle(false)}
              onDoubleClick={() => settoggle(false)}
            />
            <div
              className={` sidebar justify-start py-28 px-12 flex-col flex bg-black fixed top-0 right-0  min-w-[200px]  h-full ring-2 ring-yellow  m-0 max-w-[500px] z-40 `}
            >
              {navLink.map((nav, index) => (
                <ul
                  className
                  onClick={() => settoggle((prev) => !prev)}
                >
                  <li
                    key={nav.id}
                    className={` cursor-pointer ${
                      index === navLink.length - 1 ? "mb-5" : "mb-5"
                    } list-none  justify-end  sm:flex 
              `}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>



    {/* hero section */}
      <div className='container   max-sm:flex flex-col   items-start'>
        <div >
        {/* headline and subhead */}
        <h1 className="sm:mt-[7%] lg:w-[720px]  mt-[15%]">
          Equipping <span className="yellow">Nigerian youths </span>to <span className='font-boska'>become builders</span> of
          the <span className="yellow">life they desire</span>
        </h1>
        <p className="mt-sm opacity-90 lg:w-[600px]">
          We provide free resources, skill-building opportunities, and a
          supportive
        
          community to help you <span className="yellow">
            <strong> turn your dreams into reality</strong>
          </span>
        </p>
        </div>
        {/* buttons */}
        <div className="flex gap-5 mt-lg max-sm:flex-col">
          <button className="btn-yellow btn"> Join the Movement  </button>
          <button className="btn-white  btn"> Check our Resources</button>
        </div>
      </div>
      
    </div>
  );
}
