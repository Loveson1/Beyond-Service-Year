import logo1 from "../assets/images/url-logo.png";
import logo2 from"../assets/images/url-logo.png";
import logo3 from"../assets/images/url-logo.png";
import logo4 from "../assets/images/url-logo.png";
export default function Brand(){

    // array of logos
  const logos = [logo1, logo2, logo3, logo2, logo4];

  // duplicated logo list for  smooth animation
  const doubledLogos = [...logos, ...logos];

    return(



        <div className="text-blue-900 py-1  bg-black">
          {/* logo with animation */}
        <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll w-max ">
          {doubledLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-16">
              <img src={logo} alt={logo.alt} className="w-[200px] h-24 " />
            </div>
          ))}
        </div>
      </div>
        </div>
    )
}