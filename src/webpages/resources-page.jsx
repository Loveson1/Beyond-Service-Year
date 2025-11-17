import { useState } from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import image from "../assets/images/res1.webp";
import image1 from "../assets/images/res2.webp";
import image2 from "../assets/images/res3.webp";

let data = [
  {
     title: "BSY2025 WEBINAR Day 1 – Digital Positioning for Remote Work",
    content:
      "This webinar featured Ekwutosi Cynthia Okeh (Digital Witch founder) and Alice Joshua (Remote Work Padi founder), who shared their journeys from traditional careers to earning in foreign currency remotely, covering essential topics like skill identification, digital positioning strategies, and practical steps for Nigerian graduates and corp members to secure remote opportunities.",
    time: "2hrs",
    link:"https://www.youtube.com/embed/r9acT6Hww64",
  },
  {
    title: "BSY2025 Day 2 – Client Acquisition & Landing Freelance Jobs",
    content:
      "This webinar featured Messiah Ekaette (top-rated Upwork freelancer and client acquisition coach) and Winner Bamgboye(IT specialist and creative professional), who shared proven strategies for landing international freelance jobs, including the overdo strategy that helped Nigerian freelancers secure over $600-paying jobs, plus practical tips on portfolio building, remote work tools, and positioning yourself for global opportunities.",

    time: "2hrs ",
    link:" https://www.youtube.com/embed/rMxff9wFNWY"
  },
  {
    title: "BSY2025 Day 3 – Personal Branding & LinkedIn Growth Strategies",
    content:
      "This webinar featured Okechi ogwuma (personal branding strategist) and Rejoice (Co-founder of Beyond Service Year), who revealed how to build influential personal brands that attract international clients, including profile optimization strategies, content approaches that generate trust over sales pitches, and the exact engagement tactics that helped them land clients within 5 months on LinkedIn without sending cold DMs or submitting CVs.",

    time: "2hrs",
    link: "https://www.youtube.com/embed/nDK_qSkVdc8",
  },
];

let allData = [
  {
    image: image1,
    title: "How to brand yourself online",
    content:
      " Learn how to position yourself so clients find you, not the other way around. Build a profile that speaks to the right people, show up where it matters, and let your personal brand work while you sleep.",

    time: "10mins",
    info: "Click icons to read on your favourite handle",
    glink:"https://www.instagram.com/p/DOInD-DiYOk/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    xlink: "https://x.com/BSYNigeria/status/1963165814221320678?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_bsy2025-beyondserviceyear-personalbranding-activity-7368932847157506049-6yCz?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Career Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "Growing on LinkedIn doesn't require hours every day. Learn how to show up consistently even with a busy NYC or school schedule and build a presence that attracts opportunities while you're offline.",

    time: "8mins",
    glink: "https://www.instagram.com/p/DOasPZRDg72/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink:"https://x.com/BSYNigeria/status/1965711619629228187?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_bsy-vs-linkedin-activity-7371472355035922432-vKeL?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Career Development",
  },
  {
    image: image1,
    title: "5 free platforms to learn skills this weekend",
    content:
      " You don't need expensive courses to get started. Discover five free platforms where you can learn in-demand skills this weekend, from tech to design to virtual assistance. Start building your portfolio today without spending a dime.",

    time: "12mins",
    glink: "https://www.instagram.com/p/DOsfdSDCKSQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: "https://x.com/BSYNigeria/status/1968221833406320882?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_from-zero-experience-to-a-tech-carrier-all-activity-7373977873352814593-_pfB?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Career Development",
  },
  {
    image: image,
    title: "Mindset shift to change how you approach opportunities",
    content:
      " Stop waiting for perfect conditions or permission to start. Learn how to see yourself as a solution provider instead of a job seeker, build audacity that opens doors, and position yourself for opportunities you think are out of your league.",

    time: "10mins",
    glink: "https://www.instagram.com/reel/DO-lPR9iAOk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: " https://x.com/BSYNigeria/status/1970759746132058184?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_bsy-bsy2025-beyondserviceyear-activity-7376510344959217664-1Q61?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Personal Development",
  },
  {
    image: image1,
    title: "How to craft a selling CV",
    content:
      " Your CV might be costing you opportunities. Learn quick fixes that make recruiters stop scrolling, how to highlight results over responsibilities, and simple formatting tweaks that get your application noticed by recruiters and pass ATS screening.",

    time: "7mins",
    glink: "https://www.instagram.com/p/DPQgtXdCP4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: "https://x.com/BSYNigeria/status/1973307223607746619?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_quick-cv-check-ugcPost-7379049111964041216-4UZt?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Career Development",
  },
  {
    image: image,
    title: "One simple trick to land a mentor",
    content:
      "Adeola shares the exact approach that landed him his mentor without months of cold pitching. Discover how he built genuine connection, provided value first, and turned a simple interaction into a mentorship that’s changing his career journey.",

    time: "7mins",
    info: "Click icon to read on your favourite handle",
    glink: "https://www.instagram.com/p/DPih7cDiFRc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: "https://x.com/BSYNigeria/status/1975866548125384777?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_bsy-mentorship-activity-7381584167127527424-h1kU?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Personal Development",
  },
  {
    image: image1,
    title: "Turn your NYSC year into an opportunity",
    content:
      "Your service year doesn't have to be wasted time. Learn how to leverage your posting, document your skills, build a portfolio during camp, and position yourself for opportunities before your allowee runs out.",

    time: "8mins",
    glink: "https://www.instagram.com/p/DP0kQ_hCFyN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: " https://x.com/BSYNigeria/status/1978376846128320850?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_bsy-beyondserviceyear-bsypulseproject-activity-7384121426733113344-czQ-?utm_medium=ios_app&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o&utm_source=social_share_send&utm_campaign=copy_link",
    category: "Career Development",
  },
  {
    image: image,
    title: "3 powerful lessons from Tony Elumelu every youth should learn",
    content:
      "We broke down one of Tony Elumelu's most powerful quotes to reveal three game-changing lessons about entrepreneurship, resilience, and creating your own opportunities. These principles shaped his empire and can change your approach to success.",

    time: "10mins",
    glink: "https://www.instagram.com/p/DQGkdqniHp-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: " https://x.com/BSYNigeria/status/1980931937893228892?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_tony-elumelu-tips-to-youths-activity-7386658590045982720-ohNW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o",
    category: "Personal Development",
  },
  {
    image: image1,
    title: "The cold DM formula that actually gets replies",
    content:
      "Stop sending pitches that only get ignored. Learn how to write cold pitches that decision-makers actually respond to.",

    time: "10mins",
    glink: "https://www.instagram.com/p/DQYq87HiMYM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    xlink: "https://x.com/BSYNigeria/status/1983474180638302209?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_tell-me-about-yourself-activity-7391730702825943040-c__r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o",
    category: "Career Development",
  },
  {
    image: image,
    title: "LinkedIn made simple for students",
    content:
      "Tell me about yourself seems simple, but trips up most people. Learn the framework that keeps your answer focused, how to connect your story to what they need, and what recruiters actually want to hear in those first 60 seconds.",
    time: "10mins",
    glink:"https://www.instagram.com/p/DQqnM_TCGvi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" ,
    xlink: " https://x.com/BSYNigeria/status/1985990451699073246?s=20",
    inlink: "https://www.linkedin.com/posts/beyond-service-year-bsy_tell-me-about-yourself-activity-7391730702825943040-c__r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEeWYkB9h-W-LnBM0SNByooFEkEPW0bK7o",
    category: "Career Development",
  },
];



export default function ResourcePage() {

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
        {/* Resource section */}
        <div className="container min-h-[100vh] flex  max-sm:flex flex-col justify-center  items-center">
          <div className="">
            {/* headline and subhead */}
            <h1 className="sm:mt-[7%] lg:w-[720px] mx-auto text-center mt-[15%]">
              Carefully Crafted <span className="yellow"> Resources </span>{" "}
              <span className="font-boska"> just for </span>
              <span className="yellow">You</span>
            </h1>
            <p className="mt-sm opacity-90 mx-auto text-center lg:w-[600px]">
              Everything you need to grow your career in one place.
            </p>
          </div>
        </div>
      </div>
      <main className="bg-[#efefef] ">
        {/* Resource Section */}
        <div className="container ">
          <h2 className="text-center black mt-10">Start with these</h2>
          <p className="text-center text-xs mt-[10px] black">
            Your Growth starts here{" "}
          </p>
          
             {/* Youtube Embedded Videos */}
          <div className="flex gap-5 my-xl max-lg:flex-col justify-center  ">
            {data.map((card, i) => (
              <div
                key={i}
                className="card-blue hover:-translate-y-2 hover:shadow-xl shadow-md duration-500 "
              >
                <div>
                    <iframe
                     className="rounded-[15px] w-full"
                      src={card.link}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded YouTube Video"
                      loading="lazy"
                    ></iframe>
                  </div>
                <div className="px-5 py-5 ">
                <div className="flex  gap-5 justify-between">  <a href={card.link}>
                    <p className="mb-sm hover:text-white font-bold white opacity-90 max-w-[350px]">
                      {card.title}
                    </p>
                  </a>
                  <div className>
                      <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                        {card.time}
                      </p>
                    </div></div>
                  <div className="flex gap-5 justify-between">
                    <p className="opacity-100 black text-xs max-w-[350px]">
                      {card.content}
                    </p>
                    
                  </div>
                  <div className="flex justify-between items-center gap-8 mt-sm">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
     
        {/* All resource */}

        <div className="mt-lg  bg-yellow">
          <h2 className="text-center black pb-[40px] pt-[80px]">
            {" "}
            BSY knowledge playbooks
          </h2>

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
            <div className="max-lg:grid-cols-1 grid grid-cols-3 gap-5 py-[40px]  ">
              {visibleCardData.map((card, i) => (
                <div
                  key={i}
                  className="card-blue hover:-translate-y-2 hover:shadow-xl shadow-md duration-500"
                >
                  <img
                    src={card.image}
                    loading="lazy"
                    alt="image"
                    className="rounded-t-[15px] w-full max-h-[180px] border-black border"
                  />
                  <div className="px-5 py-5 ">
                    <div className="flex justify-between gap-5">
              
                      <p className="mb-sm hover:text-white font-bold white opacity-90 max-w-[350px]">
                        {card.title}
                      </p>
                     <div className>
                        <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                          {card.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between">
                      <p className="opacity-100 black text-xs max-w-[350px]">
                        {card.content}
                      </p>
                    </div>
                    <div className="flex justify-between items-center gap-8 mt-sm ">
                      <p className="text-[10px] white opacity-70 m-0 leading-[1.2]">
                       Click icon to read more on your favourite handle 
                      </p>
                      <div className="flex gap-6 items-end justify-end ">
                        <div>
                          <a
                            href={card.inlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                           <FaLinkedinIn />
                          </a>
                        </div>

                        <div>
                          <a
                            href={card.xlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                          <FaXTwitter />
                          </a>
                        </div>

                        <div>
                          <a
                            href={card.glink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 hover:text-white "
                          >
                          <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {visibleCards < filteredCard.length && (
            <div className="flex justify-center pb-[40px]">
              <button
                onClick={() => setVisibleCards((prev) => prev + 3)}
                className="btn-white  btn"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
