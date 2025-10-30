import deco from "../assets/images/decoration.svg";

export default function Why() {
  return (
    <div className="bg-gradient-to-b from-blue to-black m-auto relative z-0 pb-[80px]">
     
      <div className="container">
        {/* headline and subhead */}
        <h1 className="mt-xl text-center ">Why BSY</h1>
        <p className="mt-sm mb-lg text-center">
          BSY is not just a company, not just a community but a family and a
          movement
        </p>

        {/* the three why BSY card */}
        <div className="flex gap-5 max-lg:flex-col  pb-[80px] items-stretch ">
          {/* first card */}
          <div className="  flex-1 ">
            <div className="flex flex-col gap-5">
              <div className="card">
                <p className="mb-lg black  max-w-[350px]">
                  We are not just a company, not just a community but a family
                  and a movement
                </p>
                <h2 className="black">Community Building</h2>
              </div>
              <div className="card-img bg-story h-[350px]"></div>
            </div>
          </div>
          {/* second card */}
          <div className="  card-img bg-hero-mobile bg-black/10 bg-blend-darken flex-1">
            <div className="flex flex-col ">
              <p className=" 2xl:mb-[90%] mb-[100%] lg:mb-lg xl:mb-[120%] max-w-[350px]">
                We are not just a company, not just a community but a family and
                a movement
              </p>
              <h2>Community Building</h2>
            </div>
          </div>
          {/* third card */}
          <div className="  flex-1">
            <div className="flex flex-col-reverse gap-5">
              <div className="card ">
                <p className="mb-lg black  max-w-[350px]">
                  We are not just a company, not just a community but a family
                  and a movement
                </p>
                <h2 className="black">Community Building</h2>
              </div>
              <div className="card-img bg-story h-[350px] "></div>
            </div>
          </div>
        </div>
      </div> 
      {/* background yellow spiral decoration */}
      <div className="absolute z-[-1] shadow-none top-[25%] max-lg:hidden">
        <img src={deco} alt="decoration" className="w-screen " />
      </div>
    </div>
  );
}
