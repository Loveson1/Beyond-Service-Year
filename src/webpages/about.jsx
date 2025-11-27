import { FaLinkedinIn } from "react-icons/fa6";
import image1 from "../assets/images/Rejoice.jpg";
import image2 from "../assets/images/Samuel.jpg";
import image3 from "../assets/images/Juwon.jpg";
import image4 from "../assets/images/Gracious.jpg";
import image5 from "../assets/images/Annie.jpg";
import image6 from "../assets/images/Adeola.jpg";
import image7 from "../assets/images/Elizabeth.jpg";
import image8 from "../assets/images/Deborah.jpg";
import image9 from "../assets/images/team.webp";

import { useState, useEffect, useRef } from "react";

const executives = [
  {
    name: "Rejoice Onyenanu",
    image: image1,
    link: "https://www.linkedin.com/in/rejoice-onyenanu/",
    title: "Co-Founder",
    alias: "Rejoice",
  },
  {
    name: "Samuel Ibitoye",
    image: image2,
    link: "https://www.linkedin.com/in/olorunjuwon-ibitoye-2a599a165",
    title: "Chief Strategy & Growth Officer",
    alias: "Samuel",
  },
  {
    name: "Oluwajuwon Akinretin",
    image: image3,
    link: "https://www.linkedin.com/in/akinreti-oluwajuwon-3026b6219",
    title: "Chief Community Officer",
    alias: "Juwon",
  },
];

const team = [
  {
    name: "Edomwonyi Gracious",
    image: image4,
    link: "https://www.linkedin.com/in/gracious-edomwonyi",
    title: "The Creative Lead",
    alias: "Gracious",
  },
  {
    name: "Cynthia Odenu-Odenu",
    image: image5,
    link: "https://www.linkedin.com/in/cynthia-odenu-odenu/",
    title: "The Content Lead",
    alias: "Cynthia",
  },
  {
    name: "Adeola (Godson) Omomowo",
    image: image6,
    link: "https://www.linkedin.com/in/adeola-omomowo/",
    title: "The Graphic Design Lead",
    alias: "Adeola",
  },
  {
    name: "Elizabeth (Ushang) Uyang",
    image: image7,
    link: "https://www.linkedin.com/in/elizabethuyang/",
    title: "The Social Media Lead",
    alias: "Elizabeth",
  },
  {
    name: "Deborah Idaboh",
    image: image8,
    link: "https://www.linkedin.com/in/deborah-idaboh-7147ab37a/",
    title: "The Community Manager and Logistics Lead",
    alias: "Deborah",
  },
];

export default function About() {
  // Scroll control for the executives caurosel
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef(null);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const cardWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll control for the team lead caurosel
  const [activeIndex2, setActiveIndex2] = useState(0);
  const scrollRef2 = useRef(null);
  useEffect(() => {
    const container = scrollRef2.current;
    if (!container) return;
    const onScroll = () => {
      const cardWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex2(index);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#efefef] ">
      <div className=" bg-opacity-50 bg-blend-darken bg-black bg-mobile-about sm:bg-desktop-about bg-cover max-xl:bg-center bg-no-repeat w-screen min-h-[100vh]  ">
        {/* Resource section */}
        <div className="container min-h-[100vh] flex  max-sm:flex flex-col justify-center  items-center">
          <div className="">
            {/* headline and subhead */}
            <h1 className="sm:mt-[7%] lg:w-[720px] mx-auto text-center mt-[15%]">
              Every Great <span className="yellow"> Story </span>
              <span className="font-boska"> begins with a </span>
              <span className="yellow">Vision.</span>
            </h1>
            <p className="mt-sm opacity-90 mx-auto text-center lg:w-[400px]">
              Story, story! Story. Once upon a time! Time, time. This is the
              story of how BSY was born...
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Story */}
        <div className="py-16 container">
          <h2 className="black text-center mb-[5px]">Our Story</h2>
          <p className="black text-center mb-xl mx-auto opacity-70">
            Here's how it all started, not with perfection but courage
          </p>
          <div className=" flex max-sm:flex-col gap-[20px] px-10 py-16 max-w-full   bg-white rounded-xl shadow-md hover:shadow-xl duration-500">
            <p className="black opacity-80 text max-w-[500px] mx-auto ">
              <span className="font-black text-3xl">B</span>eyond Service Year
              (BSY) was born from a question that haunts thousands of Nigerian
              graduates every year: "After NYSC, what next?"
              <br />
              <br />
              During her own service year, our co-founder Rejoice Onyenanu found
              herself wrestling with this question. It wasn't just personal
              uncertainty, it was a divine vision. God laid it on her heart to
              build something bigger than herself, a community that would ensure
              no graduate would face that gap alone. <br />
              <br />
              We've seen too many brilliant young people finish their service
              year with no clear direction. Graduates with potential but no
              pathway. Corps members ready to work but not knowing where to
              start.
              <br />
              <br />
              And we realized something: The problem wasn't just about learning
              skills. It was about knowing how to actually implement them to
              land real opportunities.
            </p>

            <p className="black opacity-80 text max-w-[500px] mx-auto ">
              So we built BSY, a community dedicated to equipping Nigerian
              youths with the skills, connections, and implementation support
              they need to thrive beyond service year. This isn't just a
              project. It's a divine vision with purpose, and God remains our
              founder, guiding every step we take.
              <br />
              <br />
              Whether you're still in school, currently serving, or fresh out of
              NYSC, we're here to help you bridge the gap between where you are
              and where you need to be. Not with empty motivation, but with real
              skills, genuine networks, and hands-on experience that companies
              actually pay for.
            </p>
          </div>
          {/* vision mission and value */}
          <div className="my-lg flex max-sm:flex-col gap-[20px] justify-center">
            <div className="card max-w-lg space-y-6 relative ">
              <h2 className="black ">Our Vision</h2>
              <p className="black opacity-80 ">
                To build a Nigeria where every graduate exits NYSC with clarity,
                confidence, and real opportunities already in motion. <br />
                <br />
                We envision a generation that doesn't ask "what's next?" with
                fear but with excitement, knowing their next move is already
                mapped out.
              </p>
            </div>
            <div className="card-blue max-w-lg p-[24px] space-y-5 relative">
              <h2 className="white">Our Bold Mission</h2>
              <p className="white opacity-80 ">
                By 2027, we will equip 100,000 Nigerian youths with the skills,
                connections, and opportunities they need to succeed beyond
                service year. <br />
                <br />
                This means real skills that translate to paychecks, genuine
                connections that open doors, and tangible opportunities that
                change your career path.
              </p>
            </div>
            <div className="card bg-white max-w-lg p-[24px] space-y-5 ">
              <h2 className="black">Our Core Values</h2>
              <p className="black opacity-80 bg-green-100 px-4 text-green-900 rounded-full ">
                Empowerment
              </p>

              <p className="black opacity-80 bg-orange-100 px-4 text-orange-900 rounded-full ">
                Community
              </p>

              <p className="black opacity-80 bg-cyan-100 px-4 text-cyan-900 rounded-full ">
                Growth & Excellence
              </p>

              <p className="black opacity-80 bg-purple-100 px-4 text-purple-900 rounded-full ">
                Accessibility
              </p>
            </div>
          </div>
{/* Our Impact */}

          <div>
            <h2 className="black text-center mt-xl mb-lg">
              Our Impact Till Date
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-lg ">
              <p className="black card bg-gray-100 text-sm opacity-80">
                BSY started as a 3-day virtual event in July 2025, where we
                partnered with Afriment and iSentry to provide real value to our
                attendees. iSentry offered internship slots while Afriment
                provided subsidized rates for their bootcamp, giving our members
                immediate pathways to growth. But we didn't stop there.
              </p>
              <p className="black card bg-gray-200 text-sm  opacity-80">
                On October 13th, 2025, BSY sub-communities began working on the
                Pulse project, a mock analytics platform designed to give
                members hands-on experience of working with a startup while
                building their portfolios. By November 14th, we officially
                launched Pulse, with every sub-community member contributing to
                bring it to life.
              </p>

              <p className="black card bg-gray-300 text-sm  opacity-80">
                We've also partnered with Jobt, an AI-powered soft-skill app
                tailored to every possible industry. Through this partnership,
                our members can build the essential soft skills they need to
                land jobs, from mastering interviews to developing
                industry-specific soft skills.
              </p>

              <p className="black card bg-gray-400 text-sm  opacity-80">
                Today, we're building toward our mission of equipping 100,000
                Nigerian youths by 2027, one skill, one connection, one
                opportunity at a time.
              </p>
            </div>

            <hr/>
{/* meet the team */}
            <div>
              <h2 className="black text-center mt-lg mb-[5px] ">
                Meet Our Leadership Team
              </h2>
              <p className="black text-center mb-xl mx-auto opacity-70">
                Meet the family of visionaries united by faith, purpose and a
                passion to see youth thrive
              </p>
              <div>
                <p className=" mb-lg text-blue bg-cyan-500 bg-opacity-10 rounded-full px-5 text-center max-w-[150px] mx-auto">
                  Executives
                </p>
                <div ref={scrollRef} className="flex  gap-4 overflow-x-auto snap-mandatory snap-x  ">
                  {executives.map((index) => (
                    <div className="card bg-blue p-2 relative mx-auto snap-center">
                      <img
                      loading="lazy"
                        src={index.image}
                        alt="team-members"
                        className="rounded-[15px] min-w-[300px] card-img p-2"
                      />

                      <div
                        key={index}
                        className="card p-2 px-5 bg-blue absolute bottom-[6px] "
                      >
                        <p className="white ">{index.name}</p>
                        <p className="text-xs mb-[-5px] white">{index.title}</p>
                        <a
                          href={index.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:underline hover:text-blue text-blue inline-flex text-[9px] items-center gap-1 bg-white px-2 rounded-full  "
                        >
                          <FaLinkedinIn /> Meet {index.alias}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                {/* indicator button container */}
                <div className="mt-4 flex justify-center md:hidden gap-2">
                  {executives.map((_, i) => (
                    <button
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === activeIndex ? "bg-blue" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-lg">
              <p className=" mb-lg text-orange-900 bg-orange-500 bg-opacity-10 rounded-full px-5 text-center max-w-[150px] mx-auto mt-lg">
                Team Leads
              </p>
              <div ref={scrollRef2} className="flex  gap-4 overflow-x-auto snap-mandatory snap-x ">
                {team.map((index) => (
                  <div className="card bg-yellow p-2 relative mx-auto snap-center ">
                    <img
                    loading="lazy"
                      src={index.image}
                      alt="team-members"
                      className="rounded-[15px] min-w-[300px] card-img bg-yellow p-2"
                    />

                    <div
                      key={index}
                      className="card p-2 px-5 bg-yellow absolute bottom-[6px] "
                    >
                      <p className="black ">{index.name}</p>
                      <p className="text-xs mb-[-5px] black">{index.title}</p>
                      <a
                        href={index.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline hover:text-white text-white inline-flex text-[9px] items-center gap-1 bg-black px-2 rounded-full  "
                      >
                        <FaLinkedinIn /> Meet {index.alias}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {/* indicator button container */}
              <div className="mt-4 flex justify-center md:hidden gap-2">
                {team.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i === activeIndex2 ? "bg-yellow" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr />
            {/* join the team */}
            <h2 className="black text-center mt-lg mb-[5px]">
             Join the Team
            </h2>
            <p className="black mx-auto text-center mb-lg">Are you interested in working with BSY? Join here.</p>
            <div className="card bg-white max-w-xl rounded-xl shadow-md hover:shadow-xl duration-500 mx-auto ">
              <img src={image9} alt="team-image" className="card-img p-0" loading="lazy"/>
              <div className="flex sm:items-center justify-between max-sm:flex-col">
              <div><h2 className="black mt-sm">One of us! One of us!</h2>
              <p className="black mb-sm">Join the best team you'll ever be part of</p>
              </div>
              <button className="btn-yellow block sm:w-1/3 w-full">Join Us</button></div>
            </div>
        </div>
      </main>
    </div>
  );
}
