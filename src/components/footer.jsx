import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/images/Full logo.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wcyt3l1",
        "template_l5frv98",
        e.target,
        "IjuPgcnI0MJWz2pSA"
      )
      .then(
        () => alert("Message sent!"),
        setName(""),
        setEmail(""),
        (error) => alert("Something went wrong.")
      );
  };

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
            Say hello and get our emails to stay in touch. We want to hear from
            you, lets grow together.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="footer-form"
              placeholder="Enter your full name"
              type="text"
              minLength={5}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="footer-form"
              placeholder="Enter your email"
              type="email"
              minLength={5}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../about">Join Our Team</Link>
            </li>
            <li>
              <Link to="../partnership">Be Our Partner </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Resources</p>
          <ul className="space-y-1">
            <li>
              <Link to="../resource">Blog</Link>
            </li>
            <li>
              <Link to="../resource">Check Our Resources</Link>
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
                <div>
                  <a
                    href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className=" size-5" />
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://www.instagram.com/bsynigeria/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className=" size-5" />
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://x.com/BSYNigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className=" size-5" />
                  </a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
