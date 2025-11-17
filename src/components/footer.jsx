import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/images/Full logo.png";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className="bg-black container pt-[80px] pb-10 ">
      <div className="mb-lg">
        <img src={logo} alt="logo" className="w-32 max-sm:w-28" />
      </div>
      {/* footer links  */}
      <div className="flex gap-10 max-lg:flex-col lg:justify-between lg:items-center">
        <div className="card bg-white max-w-[400px]">
          <p className="black font-bold">Add impact to your box </p>
          <p className="black text-xs mt-1 max-w-[300px] opacity-70">
            Say hello and get our emails to stay in touch. 
            We want to hear from
            you, lets grow together.
          </p>
          <form className="flex flex-col">
            <input
              className="footer-form"
              placeholder="Enter your full name"
              type="text"
              minLength={5}
              required
            />
            <input
              className="footer-form"
              placeholder="Enter your email"
              type="email"
              minLength={5}
              required
            />
            <button type="submit" className=" btn-yellow mt-sm block w-full">
              Say Hello
            </button>
          </form>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Company</p>
          <ul className="space-y-1">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Join Our Team</a>
            </li>
            <li>
              <a href="#">Be Our Partner </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Resources</p>
          <ul className="space-y-1">
            <li>
             <Link to ="../resource">Blog</Link>
            </li>
            <li>
              <Link to ="../resource">Check Our Resources</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:bsyteamng@gmail.com">bsyteamng@gmail.com</a>
            </li>
            <li>
              <a href="tel:+2348132914115">+234 813 291 4115</a> 
            </li>
            <div className="flex gap-3">
            <li>
              <div >
            <a
              href="https://www.linkedin.com/company/beyond-service-year-bsy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className=" size-5" />
            </a>
          </div></li>
           <li>
              <div >
            <a
              href="https://www.instagram.com/bsynigeria/"
              target="_blank"
              rel="noopener noreferrer"
            >
        
              <FaInstagram className=" size-5"/>
             
            </a>
          </div></li>
           <li>
              <div >
            <a
              href="https://x.com/BSYNigeria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className=" size-5" />
            
            </a>
          </div></li></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
