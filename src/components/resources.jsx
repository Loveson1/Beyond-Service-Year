import image from "../assets/images/res1.webp";
import image1 from "../assets/images/res2.webp";
import image2 from "../assets/images/res3.webp";
export default function Resources() {
  let data = [
    {
      image: image,
      title: "How to own your space in the digital world",
      content:
        "This is a packed video that launch you into how  to prepare and groom yourself in the digital world",
      time: "2hrs",
      link:"#"
    },
    {
      image: image1,
      title: "How to craft a selling CV",
      content:
        "This is a caurosel that launch you into how to create CV that helps you sell yourself",

      time: "10mins",
      link:"#"
    },
    {
      image: image2,
      title: "How to  use Linkedin to land mouth watering opportunities",
      content:
        "In just few steps learn how to turn your linkedin into a magnet for opportunities",

      time: "15mins",
      link:"#"
    },
  ];
  return (
    <div className="bg-gradient-to-b from-black to-blue ">
      <div className="container py-20">
        <h1 className="text-center">Resources to get started</h1>
        <p className="text-center mt-sm">Your Growth starts here </p>
        {/* resource card */}
        <div className="flex gap-5 my-xl max-lg:flex-col">
       { data.map((card, i)=>(
        <div key={i} className="card  ">
          <img src={card.image} alt="image" className="rounded-t-[15px] w-full max-h-[180px] border-black border" />
         <a href={card.link} ><p className="my-sm hover:text-blue font-bold black max-w-[350px]">{card.title}</p></a> 
          <div className="flex gap-5 justify-between">
          <p className="black text-sm max-w-[350px]">{card.content}</p>
          <div className>
            <p className="black px-2 py-1 w-14 text-center text-xs bg-white rounded-2xl">{card.time}</p>
          </div></div>
        </div>))} 
        </div>
        {/* button */}
        <div className="flex justify-center">
          <button className="btn-white  btn"> Load More</button>
        </div>
      </div>
    </div>
  );
}
