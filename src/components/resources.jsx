import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import image from "../assets/images/res1.webp";
import image1 from "../assets/images/res2.webp";
import image2 from "../assets/images/res3.webp";
import { Link } from "react-router-dom";
export default function Resources() {
  let data = [
    {
      image: image2,
      title: "How to own your space in the digital world",
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
        <h1 className="text-center">Resources to get started</h1>
        <p className="text-center mt-sm">Your Growth starts here </p>
        {/* resource card */}
        <div className="flex gap-5 my-xl max-lg:flex-col ">
          {data.map((card, i) => (
            <div key={i} className="card">
              <img
                src={card.image}
                loading="lazy"
                alt="image"
                className="rounded-t-[15px] w-full max-h-[180px] border-black border"
              />
              <a href={card.link}>
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
              <div className="flex justify-between items-center gap-8 mt-sm">
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
              </div>
            </div></div>
          ))}
        </div>
        {/* button */}
        <div className="flex justify-center">
         <Link to ="../resource">  <button className="btn-white  btn" >Load More</button></Link>
        </div>
      </div>
    </div>
  );
}
