import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import image from "../assets/images/in.webp";
import image1 from "../assets/images/cv.webp";
import { Link } from "react-router-dom";
export default function Resources() {
  let data = [
    {
      image: image1,
      title: "How to craft a selling CV",
      content:
        "This is a caurosel that launch you into how to create CV that helps you sell yourself",

      time: "10mins",
      info: "Click icons to read on your favourite handle",
      glink: <FaFacebook />,
      xlink: <FaXTwitter />,
      inlink: <FaLinkedinIn />,
    },
    {
      image: image,
      title: "LinkedIn made simple for students & Corp members",
      content:
        "In just few steps learn how to turn your linkedin into a magnet for opportunities",

      time: "15mins",
      info: "Click icon to read on your favourite handle",
      glink: <FaFacebook />,
      xlink: <FaXTwitter />,
      inlink: <FaLinkedinIn />,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-black to-blue ">
      <div className="container py-20">
        <h1 className="text-center"  data-aos="fade-right" data-aos-delay="600" >Resources to get started</h1>
        <p className="text-center mt-sm"  data-aos="fade-right" data-aos-delay="600" >Your Growth starts here </p>
        {/* resource card */}

        <div className="flex gap-5 max-lg:flex-col mt-xl mb-lg " >
           <div
               data-aos="fade-right" data-aos-delay="600" 
                className="card-blue bg-yellow hover:-translate-y-2 hover:shadow-xl shadow-md duration-500  "
              >
                <div className="flex-1 ">
                    <iframe
                     className="rounded-[15px] w-full"
                      src="https://www.youtube.com/embed/r9acT6Hww64"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded YouTube Video"
                      loading="lazy"
                    ></iframe>
                  </div>
                <div className="px-5 py-5 ">
                <div className="flex  gap-5 justify-between">  
                  <div >
                   <p className="mb-sm hover:text-white font-bold black opacity-90 max-w-[350px]">
                     BSY2025 WEBINAR Day 1 – Digital Positioning for Remote Work
                    </p> 
                      
                    </div>
                  <div>
                    <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                   2hrs
                      </p></div>
                    </div>
                  <div className="flex gap-5 justify-between">
                    <p className="opacity-100 black text-xs max-w-[350px]">
                         This webinar featured Ekwutosi Cynthia Okeh (Digital Witch founder) and Alice Joshua (Remote Work Padi founder), who shared their journeys from traditional careers to earning in foreign currency remotely, covering essential topics like skill identification, digital positioning strategies, and practical steps for Nigerian graduates and corp members to secure remote opportunities.,

                    </p>
                    
                  </div>
                  <div className="flex justify-between items-center gap-8 mt-sm">
                  </div>
                </div>
              </div>
        <div className="flex gap-5  max-lg:flex-col flex-2 ">
          {data.map((card, i) => (
            <div key={i} className="card p-0 hover:-translate-y-2 hover:shadow-xl shadow-md duration-500 "  data-aos="fade-right" data-aos-delay="600" >
              <img
                src={card.image}
                loading="lazy"
                alt="image"
                className="rounded-t-[15px] w-full max-h-[180px] border-black border "
              />
              <div className="px-6 py-2">
              <a href={card.inlink}>
                <p className="my-sm hover:text-white font-bold black max-w-[350px]">
                  {card.title}
                </p>
              </a>
              <div className="flex gap-5 justify-between">
                <p className="black text-sm max-w-[350px]">{card.content}</p>
                <div className>
                  <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">
                    {card.time}
                  </p>
                </div>
              </div>
              <div className="flex  justify-between items-center gap-8 mt-sm">
              <p className="text-[10px] black m-0">{card.info}</p>
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
                    {card.glink}
                  </a>
                </div>
              </div></div>
            </div></div>
          ))}
        </div>
        
        </div>
        {/* button */}
        <div className="flex justify-center"  data-aos="fade-up" data-aos-delay="600" >
         <Link to ="../resource">  <button className="btn-white  btn" >Load More</button></Link>
        </div>
      </div>
    </div>
  );
}
