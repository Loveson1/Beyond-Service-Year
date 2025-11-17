import {FaEnvelope, FaXTwitter, FaInstagram, FaLinkedinIn, FaPhone  } from "react-icons/fa6";


export default function Contact() {
  return (
    <div className="bg-[#efefef] ">
 
      <div className=" bg-opacity-50 bg-blend-darken bg-black bg-contact bg-cover max-xl:bg-center bg-no-repeat w-screen min-h-[100vh]  ">
    

        {/* Resource section */}
        <div className="container min-h-[100vh] flex  max-sm:flex flex-col justify-center  items-center">
          <div className="">
            {/* headline and subhead */}
            <h1 className="sm:mt-[7%] lg:w-[720px] mx-auto text-center mt-[15%]">
              Every Great <span className="yellow"> Journey </span>
              <span className="font-boska"> begins with a </span>
              <span className="yellow">Conversation.</span>
            </h1>
            <p className="mt-sm opacity-90 mx-auto text-center lg:w-[400px]">
              Connect with the BSY team and get the help you need to take your
              next bold step.
            </p>
          </div>
        </div>
      </div>
      <main>
        <div  className="py-16 container">
        {/* Contact-form */}
        <h2 className="black text-center mb-sm">Send Us a Message</h2>
        <p className="black text-center mb-xl max-w-[500px] mx-auto opacity-70">Have a specific question or need support? Fill out the form below, and we’ll get back to you as soon as possible.</p>
        <form action="" className=" flex flex-col gap-2 px-10 py-16 max-w-lg mx-auto  bg-white rounded-xl shadow-md hover:shadow-xl duration-500">
          <div className="flex justify-end gap-5">
            <div >
              <label htmlFor="firstname">First Name</label>
              <input className="form w-full mt-2" type="text" placeholder="First Name" required min={3}/>
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input className="form w-full mt-2" type="text" placeholder="Last Name" required min={3}/>
            </div>
          </div>
          
          <label htmlFor="email" className="mt-5">Email</label>
          <input className="form" type="email" placeholder="example@gmail.com" required />
          <label htmlFor="phone" className="mt-5">Phone</label>
          <input className="form" type="tel" placeholder="Phone Number" required min={10}/>
          <label htmlFor="message" className="mt-5">Message</label>
          <textarea className="form py-5" placeholder="Your message here" required></textarea>
        </form>

       
        </div> 
        {/* Contact-info */}
        <div className="bg-yellow pt-[30px] sm:p-[50px] p-[24px] mx-auto  rounded-t-[24px] flex gap-5 justify-center max-lg:flex-col">
              <h2 className="black text-center mb-sm">Get in Touch</h2>
            <div className="flex flex-col items-center bg-opacity-20 bg-white rounded-[9px] justify-center px-7 py-5 gap-2 border border-black w-full">
                <FaEnvelope />
                <a href="mailto:bsyteamng@gmail.com"><p className="black text-sm opacity-70">bsyteamng@gmail.com</p></a>
            </div>
            <div className="flex flex-col items-center bg-opacity-20 bg-white rounded-[9px] px-7 py-5 justify-center gap-2 border border-black w-full">
                <FaPhone />
               <a href="tel:+2348132914115"><p className="black text-sm opacity-70">+234 813 291 4115</p></a> 
            </div>
            <div className="flex flex-col items-center justify-center bg-opacity-20 bg-white rounded-[9px] px-7 py-5 gap-2 border border-black w-full">
               <div className="flex gap-7 items-center ">
                           <li>
                             <div >
                           <a
                             href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaLinkedinIn className=" size-5 text-black" />
                           </a>
                         </div></li>
                          <li>
                             <div >
                           <a
                             href="https://www.instagram.com/bsynigeria/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                       
                             <FaInstagram className=" size-5 text-black"/>
                            
                           </a>
                         </div></li>
                          <li>
                             <div >
                           <a
                             href="https://x.com/BSYNigeria"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaXTwitter className=" size-5 text-black " />
                           
                           </a>
                         </div></li></div>
            </div>

        </div>
      </main>
    </div> 
  );
}
