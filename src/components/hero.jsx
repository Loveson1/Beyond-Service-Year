import { Link } from "react-router-dom";

export default function Hero() {



  return (
   <div className='xl:bg-hero md:bg-hero-tab bg-opacity-20 bg-blend-darken bg-[#7BCFE9] max-sm:bg-hero-mobile  bg-cover max-sm:bg-center bg-no-repeat w-screen min-h-[100vh] max-sm:h-[1000px] '>
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
        <div className="flex gap-5 mt-lg pb-[100px]  max-sm:flex-col">
          <button className="btn-yellow btn"> Join the Movement  </button>
        <Link to ="../resource"><button className="btn-white  btn"> Check our Resources</button></Link>
        </div>
      </div>
      
    </div>
  );
}
