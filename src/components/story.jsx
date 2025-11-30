import { Link } from "react-router-dom";


export default function Story() {
  return (
    <div className="  flex flex-col items-center justify-center  bg-blend-darken bg-black/60 bg-story bg-cover max-sm:bg-center bg-no-repeat w-screen ">
      {/* hero section */}
      <div className="container  mx-auto flex flex-col md:items-start items-center my-lg ">
        {/* headline and subhead */}
 
        <div className=" flex flex-col mx-auto">
               <h1 >Our Story</h1>
               <div className="flex sm:justify-center mx-auto sm:items-start max-lg:flex-col gap-16 mt-lg">
          <div>
             
             <h2 className="font-bold mb-sm yellow">In the beginning</h2>
            <p className="  max-w-[520px] ">
              Beyond Service Year (BSY) began as a God-given vision to guide
              Nigerian youths who often feel lost after NYSC. What started as
              one person’s yes to purpose has grown into a movement helping
              young Nigerians gain clarity, confidence, and direction for life
              after service. Our goal is to raise a generation that knows who
              they are, what they carry, and how to walk boldly into the future
              God has prepared for them. BSY is not just a company, not just a
              community, but a family and a movement.
            </p>
            <div className="flex i gap-5 mt-lg max-lg:flex-col md:flex-row  mb-lg">
              <a href="https://bit.ly/4oomRUg" target="_blank" rel="noopener noreferrer"><button className="btn-yellow btn max-sm:w-full"> Join the Movement</button></a>
             <Link to="../about"> <button className="btn-white  btn"> Read our Story</button></Link>
            </div>
          </div>
          {/* buttons */}
          <div className="space-y-1 max-sm:text-center max-sm:card max-sm:bg-black ">
            <h2 className="font-bold mb-sm yellow">BSY impact till date</h2>
            <h2 className="yellow font-semibold">1000+</h2>
            <p>Youths impacted across Nigeria</p>
            <h2 className="yellow font-semibold">15+</h2>
            <p>Youths who got into bootcamps and internship</p>
            <h2 className="yellow font-semibold">25+</h2>
            <p>Volunteers breaking grounds</p>
          </div></div>
        </div>
        
      </div>
    </div>
  );
}
