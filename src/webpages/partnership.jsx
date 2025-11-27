import partner from "../assets/images/partner.webp";
import ads from "../assets/images/ads.webp";
import professionals from "../assets/images/professionals.webp";
import partner1 from "../assets/images/partner (1).webp";
import partner3 from "../assets/images/partner (2).webp";
import partner2 from "../assets/images/partner (3).webp";
import { useState, useEffect, useRef } from "react";

const Faq = [
  {
    title: "What types of partnerships does BSY offer?",
    content: `We're open to a range of partnerships: sponsorships, program collaborations, co-branded initiatives, event partnerships, and more. If it aligns with our mission and benefits the community, let's explore it.`,
  },
  {
    title: "Who can partner with BSY?",
    content:
      "We partner with organizations that share our core values: empowerment, community, growth & excellence, and accessibility. Whether you're a startup or an established company, if your goals align with ours and you're committed to creating real opportunities for young Nigerians, we'd love to work with you.",
  },
  {
    title: "Do you only work with big brands?",
    content:
      "Actually, we love working with small brands and startups. But we work with big brands too. Size doesn't matter to us, alignment does. If your mission matches ours and you're ready to invest in Nigeria's youth, let's talk.",
  },
  {
    title: "What's the partnership process?",
    content:
      "Simple. You submit an application, we review it, and if there's alignment, we'll set up a call to explore how we can work together. From there, we'll co-create a partnership that works for both of us.",
  },
  {
    title: "How do partnerships benefit BSY members?",
    content:
      "Our members get access to real opportunities: courses that build job-ready skills, internships that give them hands-on experience, mentorship from industry professionals, career resources, and connections that open doors. Every partnership we pursue adds real value to their lives.",
  },

  {
    title: "What do you look for in a potential partner?",
    content:
      "We look for organizations that are genuinely committed to youth development, share our values, and want to create opportunities that matter. If you're ready to show up authentically and invest in building skills and creating pathways for young Nigerians, you're exactly who we're looking for.",
  },

  {
    title: "What's the cost of partnering with BSY?",
    content:
      "Every partnership is different. Let's talk about your goals and what you're looking to build, and we'll figure out what works for both the BSY community and your brand from there.",
  },

  {
    title: "How long do partnerships typically last?",
    content:
      "We're building for the long haul. While partnership timelines vary based on what we're creating together, we're focused on relationships that grow and create lasting impact on our community members.",
  },
];

const partners = [
  {
    name: "Afriment",
    image: partner1,
    intro:
      "Afriment is a global mentorship and internship platform bridging the gap between knowledge and real-world experience for young tech professionals. Through their partnership with BSY, our members gained access to discounted bootcamps that helped them develop job-ready skills in software engineering, UI/UX design, data science, and more. For BSY members looking to level up their technical expertise, Afriment made that path more accessible.",
    link: "https://www.afriment.com/",
  },
  {
    name: "Isentry Technologies",
    image: partner2,
    intro:
      "Isentry Technologies develops innovative technology solutions that empower businesses and individuals to thrive. Through their partnership with BSY, they created internship opportunities for our members to get real experience working on actual tech products and solutions. For BSY members ready to move from learning to doing, this partnership opened doors to hands-on work that builds real experience.",
    link: "https://isentrytechnologies.com/",
  },
  {
    name: "Jobt",
    image: partner3,
    intro:
      "Jobt is an AI-powered career advancement platform helping professionals develop the soft skills that drive real success. From interview preparation and salary negotiation to presentation feedback and personalized coaching, Jobt uses AI to give you the skills that set you apart in your field. Through their partnership with BSY, our members get early access as Jobt's first users when they launch, giving you a front-row seat to the tools that will help you not just land jobs, but thrive in them.",
    link: "https://www.linkedin.com/company/jobtai/",
  },
];

export default function Partnership() {
  // Scroll ontrol for the partners caurosel
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

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

  //   function for controlling faq accordion
  const toggle = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#efefef] ">
      <div className=" bg-opacity-50 bg-blend-darken bg-black bg-partnership bg-cover max-xl:bg-center bg-no-repeat w-screen min-h-[100vh]  ">
        <div className="container min-h-[100vh] flex  max-sm:flex flex-col justify-center  items-center">
          <div className="">
            {/* headline and subhead */}
            <h1 className="sm:mt-[7%] lg:w-[720px] mx-auto text-center mt-[15%] ">
              <span className="font-boska">Two</span> are{" "}
              <span className="yellow"> better </span> than
              <span className="font-boska"> One </span>
            </h1>
            <p className="mt-sm opacity-90 mx-auto text-center lg:w-[400px]">
              Every partnership multiplies impact, every collaboration brings a
              piece of the vision to life.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div className="py-16 container">
          <h2 className="black text-center mb-[5px]">Partner with BSY</h2>
          <p className="black text-center sm:mb-xl  mb-lg mx-auto opacity-70">
            Let's Build Something Bigger Together
          </p>

          {/* first paragraph */}
          <div className="flex max-sm:flex-col-reverse gap-5 mb-lg  ">
            <div className="flex-1">
              <p className="black max-w-[500px] mb-sm">
                BSY isn't just a community, it's a movement. And we're looking
                for partners who want to be part of something that actually
                matters.
                <br />
                <br />
                If you believe in equipping young Nigerians, creating real
                opportunities, and building a future where everyone gets a fair
                shot at success, then let's talk. Because the best partnerships
                aren't transactional, they're transformational.
              </p>
              <button className="btn-yellow btn block max-sm:w-full">
                Partner with BSY
              </button>
            </div>
            <div className="flex-1">
              <img
                src={partner}
                alt="partner-image"
                className="card-img p-[2px] bg-black"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <hr />
          {/* Partnership benefit */}
          <div className="flex max-sm:flex-col gap-5 my-lg ">
            <div className="flex-1">
              <h2 className="black mb-[5px]"> Why Partner with BSY</h2>
              <p className="black max-w-[500px] mb-sm">
                You know your brand can make a real difference. But finding the
                right community to partner with isn't always easy. You want a
                partnership that actually gives you real value, one that
                connects you with people who care about your offer, not just
                numbers on a page.
                <br />
                <br />
                BSY offers exactly that.
                <br /> By partnering with us, you get:
              </p>
            </div>
            <div className="flex-1 card space-y-2">
              <p className="font-bold black">Access to Talent We've Nurtured</p>
              <img
                src={professionals}
                alt="partner-image"
                className="card-img p-[2px] bg-black"
                height="100%"
                width="100%"
              />
              <p className="black text-sm ">
                The main value here is simple: our people. You get direct access
                to young Nigerians we've equipped with the skills and mindset to
                succeed. Whether you're looking for interns, employees, or
                collaborators, you're connecting with people who are ready.
              </p>
            </div>
            <div className="flex-1 card space-y-2">
              <p className="font-bold black">
                Visibility to an Engaged Community
              </p>
              <img
                src={ads}
                alt="partner-image"
                className="card-img p-[2px] bg-black"
                height="100%"
                width="100%"
              />

              <p className="black text-sm ">
                BSY has a community that's actively growing and engaged. If
                you're a brand looking to introduce your service, product, or
                just get your name in front of young Nigerians, this is how you
                reach people who actually care about what you're offering.
              </p>
            </div>
          </div>

          <hr />
          {/* meet our partners */}
          <div>
            <div className=" my-lg ">
              <h2 className="black text-center mb-[5px]">Meet Our Partners</h2>
              <p className="black text-center sm:mb-xl  mb-lg mx-auto opacity-70">
                Because a tree doesn't make a forest
              </p>

              <div
                ref={scrollRef}
                className="flex  gap-6 max-sm:overflow-x-auto snap-mandatory snap-x scroll-smooth"
              >
                {partners.map((index) => (
                  <div
                    key={index}
                    className="card bg-white min-w-[300px] snap-center"
                  >
                    <img
                      src={index.image}
                      alt="partners"
                      className="card-img bg-black p-[2px]"
                    />
                    <div className="my-sm space-y-1">
                      <h2 className="black">{index.name}</h2>
                      <p className="black max-w-[500px] text-sm">
                        {index.intro}
                      </p>
                    </div>
                    <a
                      href={index.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-100"
                    >
                      {" "}
                      <button className="btn-yellow btn block max-sm:w-full">
                        Learn More
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* indicator button container */}
            <div className="mt-4 flex justify-center md:hidden gap-2">
              {partners.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === activeIndex ? "bg-yellow" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Faq */}
        <div className=" bg-black ">
          <div className=" container ">
            {/* faq head */}
            <h1 className="text-center pt-10 mb-sm">
              Frequently asked questions
            </h1>
            <p className="text-center pb-20">Your Questions, Answered</p>
            {/* faq content */}
            <div className="flex flex-col justify-center gap-6 ">
              {Faq.map((f, index) => (
                <div
                  key={index}
                  className="border-b border-white border-opacity-40 transition "
                >
                  <div className="flex justify-between gap-20 ">
                    <button onClick={() => toggle(index)} className="text-left">
                      <p className="font-medium mb-6  ">{f.title}</p>
                    </button>
                    <button
                      onClick={() => toggle(index)}
                      className="size-6 object-contain text-white"
                    >
                      {activeFaqIndex === index ? "-" : "+"}
                    </button>
                  </div>

                  {/* accordion display for mobile and tablet laptop */}
                  {activeFaqIndex === index && (
                    <div className=" block ">
                      <p className="mb-6   ">{f.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
         <div className="bg-black py-[80px] flex max-sm:flex-col gap-4 justify-between">
          <div className="flex-1 space-y-1">
          <h1 className="yellow">
            Ready to Make Moves? 
          </h1> 
          <h2>The future of Nigeria is being built right now
            by young people who refuse to wait for permission. If you want to be
            part of that story, let's partner up.</h2>
            </div>
            <div className="flex-1 justify-items-end">
               <button className="btn-yellow btn block max-sm:w-full ">
                Partner with BSY
              </button>
              </div>
            
        </div>  
        
        </div>
          
        </div>

     
      </main>
    </div>
  );
}
