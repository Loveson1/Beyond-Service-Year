import logo from "../assets/images/Full logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

let navLink = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "resource", title: "Resources" },
  { id: "contact", title: "Contact" },
  { id: "partnership", title: "Partnership" },
];

export default function Navbar() {
  const [toggle, settoggle] = useState(false);

    return(
        <div className="absolute top-0 left-0 w-full z-50 ">
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
                  className={({ isActive }) =>
                    isActive ? "yellow font-bold" : ""
                  }
                >
                  {" "}
                  {link.title}
                </NavLink>
              ))}
                <a href="https://bit.ly/4oomRUg" target="_blank" rel="noopener noreferrer"><button className="btn-yellow btn">Join the movement</button></a>
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
                    to={`/${link.id}`} //
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

                <a href="https://bit.ly/4oomRUg" target="_blank" rel="noopener noreferrer"><button className="btn-yellow btn">Join the movement</button></a>

              </div>
            </div>
          )}
        </div>
        </div>
    )
}