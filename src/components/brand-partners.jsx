import logo1 from "../assets/images/brandlogo (1).png";
import logo2 from "../assets/images/brandlogo (2).png";
import logo3 from "../assets/images/brandlogo (3).png";

export default function Brand() {
  // array of logos
  const logos = [logo1, logo2, logo3, ];

  // duplicated logo list for  smooth animation
  const doubledLogos = [...logos, ...logos];

  return (
    <div className="text-blue-900 bg-gray-300   ">
      <h2 className="black font-bold py-5 text-center opacity-40">Our Trusted Partners</h2>
      {/* logo with animation */}
      <div className="relative w-full overflow-hidden bg-white">
        <div className="flex animate-scroll w-max ">
          {doubledLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-28 max-sm:px-2">
              <img src={logo} alt={logo.alt} className="w-[200px] h-24 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
