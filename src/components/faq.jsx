import { useState } from "react";
export default function Faq() {
  // state for rendering the accordion
  const [activeIndex, setActiveIndex] = useState(null);

  //   faq content
  const Faq = [
    {
      title: " What makes BSY different?",
      content:
        "BSY isn't just another program. We're a community of young Nigerians helping each other build the skills, confidence, and direction needed to land better jobs and create sustainable careers. Once you join the BSY Army, we walk with you through every step with real guidance and experiences that lead to real results.",
    },
    {
      title: " What kind of support will I get in the community?",
      content:
        "Growth is easier when you're not alone. Inside BSY, you'll find people who check in on you, share opportunities, and keep you accountable. It's a place to learn, grow, and feel seen because we rise better together.",
    },
    {
      title: " Will I get access to resources and tools?",
      content:
        "Yes. BSY Armies get access to webinars, internship opportunities, community-led sessions, and other resources made possible by people who believe in this mission. You'll find what you need to keep growing.",
    },
    {
      title: "Is BSY right for me?",
      content:
        "If you're a young Nigerian ready to level up your career but unsure where to start, BSY is for you. Whether you're a student, recent graduate, or young professional looking for better opportunities, you'll find your people here.",
    },
    {
      title: " Do I need experience to join?",
      content:
        "Not at all. BSY is built for people at different stages. Whether you're a student just starting out, switching careers, or still searching for your first real opportunity, you'll find resources and support that meet you where you are.",
    },
  ];

  //   function for controlling faq accordion
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-gradient-to-b from-blue to-black"  data-aos="fade-up" data-aos-delay="200" >
      <div className=" container ">
        {/* faq head */}
        <h1 className="text-center pt-10 mb-sm">Frequently asked questions</h1>
        <p className="text-center pb-20">
          Can’t find the answer here? Check out our Help Center.
        </p>
        {/* faq content */}
        <div className="flex flex-col justify-center gap-6 ">
          {Faq.map((f, index) => (
            <div
              key={index}
              className="border-b border-blue border-opacity-40 transition "
            >
              <div className="flex justify-between gap-20 ">
                <button onClick={() => toggle(index)} className="text-left">
                  <p className="font-medium mb-6  ">{f.title}</p>
                </button>
                <button
                  onClick={() => toggle(index)}
                  className="size-6 object-contain text-white"
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
         
              {/* accordion display for mobile and tablet laptop */}
              {activeIndex === index && (
                <div className=" block ">
                  <p className="mb-6   ">{f.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
