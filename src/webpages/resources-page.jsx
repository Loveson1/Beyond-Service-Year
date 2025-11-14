import logo from "../assets/images/Full logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import image from "../assets/images/res1.webp";
import image1 from "../assets/images/res2.webp";
import image2 from "../assets/images/res3.webp";

let data = [
  {
    image: image2,
    title: "Own your space in the digital world",
    content:
      "This is a packed video that launch you into how  to prepare and groom yourself in the digital world",
    time: "2hrs",
    link: "#",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
  },
];

let allData = [
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Career Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Personal Development",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Personal Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Career Development",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Personal Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Career Development",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Personal Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Personal Development",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      "This is a caurosel that launch you into how to create CV that helps you sell yourself",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Career Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "In just few steps learn how to turn your linkedin into a magnet for opportunities",

    time: "15mins",
    info: "Click icon to read on your favourite handle",
    fblink: <FaFacebook />,
    xlink: <FaXTwitter />,
    inlink: <FaLinkedinIn />,
    category: "Career Development",
  },
];

let navLink = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "resource", title: "Resources" },
  { id: "contact", title: "Contact" },
  { id: "partnership", title: "Partnership" },
];

export default function ResourcePage() {

  const [toggle, settoggle] = useState(false);
  const [activefilter, setactivefilter] = useState("All");
  const [visibleCards, setVisibleCards] = useState(3);

  const filteredCard =
    activefilter === "All"
      ? allData
      : allData.filter((data) => data.category === activefilter);
  const visibleCardData = filteredCard.slice(0, visibleCards);

  return (
    <div className="bg-[#efefef]">
      <div className=" bg-opacity-50 bg-blend-darken bg-black bg-resource bg-cover max-sm:bg-cover bg-no-repeat w-screen min-h-[100vh]  ">
        {/* Navbar section */}

        {/* desktop logo, link and button */}
        <div className="container m-auto hidden lg:block ">
          <div className=" flex-wrap flex items-center justify-between  ">
            <div>
              <img src={logo} className="w-24" />
            </div>

            <div className="flex items-center gap-[30px] flex-wrap">
              {navLink.map((link) => (
                <NavLink
                  key={link.id}
                  to={`/${link.id}`} // 👈 This matches your route
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  <li className="text-black" key={link.id}>
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                </NavLink>
              ))}
              <button className="btn-yellow btn">Join the movement</button>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden  w-full relative  justify-between flex items-center container  text-center ">
          <div>
            <img src={logo} className="w-20" />
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
                {navLink.map((link, index) => (
                  <NavLink
                    key={link.id}
                    to={`/${link.id}`} // 👈 This matches your route
                    className={({ isActive }) => (isActive ? "font-bold" : "")}
                  >
                    <ul className onClick={() => settoggle((prev) => !prev)}>
                      <li
                        key={link.id}
                        className={` cursor-pointer ${
                          index === navLink.length - 1 ? "mb-5" : "mb-5"
                        } list-none  justify-end  sm:flex 
              `}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    </ul>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Resource section */}
        <div className="container min-h-[70vh] flex  max-sm:flex flex-col justify-center  items-center">
          <div className="">
            {/* headline and subhead */}
            <h1 className="sm:mt-[7%] lg:w-[720px] mx-auto text-center mt-[15%]">
              Carefully Crafted <span className="yellow"> Resources </span>{" "}
              <span className="font-boska"> just for </span>
              <span className="yellow">you</span>
            </h1>
            <p className="mt-sm opacity-90 mx-auto text-center lg:w-[600px]">
              Everything you need to grow your career in one place.
            </p>
          </div>
        </div>
      </div>
      <main className="bg-[#efefef] ">
        <div className="container ">
          <h2 className="text-center black mt-10">Featured Resource</h2>
          <p className="text-center text-xs mt-[10px] black">Your Growth starts here </p>
          {/* resource card */}
          <div className="flex gap-5 my-xl max-lg:flex-col ">
            {data.map((card, i) => (
              <div key={i} className="card-blue hover:-translate-y-2 hover:shadow-2xl shadow-md duration-500">
                <img
                  src={card.image}
                  loading="lazy"
                  alt="image"
                  className="rounded-t-[15px] w-full max-h-[180px] border-black border"
                />
                <div className="px-5 py-5 ">
                  <a href={card.inlink}>
                    <p className="mb-sm hover:text-white font-bold white opacity-90 max-w-[350px]">
                      {card.title}
                    </p>
                  </a>
                  <div className="flex gap-5 justify-between">
                    <p className="opacity-100 black text-sm max-w-[350px]">
                      {card.content}
                    </p>
                    <div className>
                      <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                        {card.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-8 mt-sm">
                    <p className="text-[10px] white opacity-70 m-0 leading-[1.2]">
                      {card.info}
                    </p>
                    <div className="flex gap-5 items-end justify-end ">
                      <div>
                        <a
                          href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-100 hover:text-white "
                        >
                          {card.inlink}
                        </a>
                      </div>

                      <div>
                        <a
                          href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-100 hover:text-white "
                        >
                          {card.xlink}
                        </a>
                      </div>

                      <div>
                        <a
                          href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-100 hover:text-white "
                        >
                          {card.fblink}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Youtube Embedded Videos */}
        <div></div>
        {/* All resource */}

        <div className="mt-lg  bg-yellow">
          <h2 className="text-center black pb-[40px] pt-[80px]"> BSY knowledge playbooks</h2>

          {/* Category button */}
          <div className="flex gap-10 sm:justify-center px-6   items-center overflow-x-scroll ">
            {["All", "Career Development", "Personal Development"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setactivefilter(filter);
                    setVisibleCards(3);
                  }}
                  className={`btn-white btn ${
                    activefilter === filter ? "active" : ""
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
          {/* All resource  */}
          <div className="container">
            {/* resource card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-[40px]  ">
              {visibleCardData.map((card, i) => (
                <div key={i} className="card-blue hover:-translate-y-2 hover:shadow-2xl shadow-md duration-500">
                  <img
                    src={card.image}
                    loading="lazy"
                    alt="image"
                    className="rounded-t-[15px] w-full max-h-[180px] border-black border"
                  />
                  <div className="px-5 py-5 ">
                    <a href={card.inlink}>
                      <p className="mb-sm hover:text-white font-bold white opacity-90 max-w-[350px]">
                        {card.title}
                      </p>
                    </a>
                    <div className="flex gap-5 justify-between">
                      <p className="opacity-100 black text-sm max-w-[350px]">
                        {card.content}
                      </p>
                      <div className>
                        <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                          {card.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-8 mt-sm">
                      <p className="text-[10px] white opacity-70 m-0 leading-[1.2]">
                        {card.info}
                      </p>
                      <div className="flex gap-5 items-end justify-end ">
                        <div>
                          <a
                            href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                            {card.inlink}
                          </a>
                        </div>

                        <div>
                          <a
                            href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                            {card.xlink}
                          </a>
                        </div>

                        <div>
                          <a
                            href="https://www.linkedin.com/company/beyond-service-year-bsy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                            {card.fblink}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>   
             </div>
      { visibleCards < filteredCard.length && (
        <div className="flex justify-center pb-[40px]">
          <button onClick={()=> setVisibleCards(prev => prev + 3)} className="btn-white  btn">Load More</button>
        </div> )}
          </div>

          
    
      </main>
    </div>
  );
}
