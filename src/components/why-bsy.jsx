import deco from "../assets/images/decoration.svg";

export default function Why() {
  return (
    <div className="bg-gradient-to-b from-blue to-black m-auto relative z-0 pb-[80px]">
      <div className="container">
        {/* headline and subhead */}
        <h1 className="sm:mt-xl mt-lg text-center "  data-aos="fade-down" data-aos-delay="400" >Why BSY</h1>
        <p className="mt-sm mb-lg text-center"  data-aos="fade-down" data-aos-delay="400" >
          BSY is not just a company, not just a community but a family and a
          movement
        </p>

        {/* the three why BSY card */}
        <div className="flex gap-5 max-lg:flex-col  pb-[80px] items-stretch ">
          {/* first card */}
          <div className="  flex-1 " >
            <div className="flex flex-col gap-5">
              <div className="card"  data-aos="fade-right" data-aos-delay="500" >
                <p className="mb-lg black  max-w-[350px]">
                  After NYSC, many graduates feel stuck and unsure of their next
                  move. BSY helps you find direction and take confident steps
                  toward your goals.
                </p>
                <h2 className="black">Direction</h2>
              </div>
              <div className="card-img bg-why2 h-[350px]"  data-aos="fade-up" data-aos-delay="600" ></div>
            </div>
          </div>
          {/* second card */}
          <div className="  card-img bg-why3 bg-center bg-black/10 bg-blend-darken flex-1"  data-aos="fade-down" data-aos-delay="900" >
            <div className="flex flex-col ">
              <p className=" 2xl:mb-[90%] mb-[100%] lg:mb-lg xl:mb-[120%] max-w-[350px]">
                BSY exists so you don’t have to walk this journey alone.
              </p>
              <h2>Community</h2>
            </div>
          </div>
          {/* third card */}
          <div className="  flex-1">
            <div className="flex flex-col-reverse gap-5">
              <div className="card "  data-aos="fade-left" data-aos-delay="700" >
                <p className="mb-lg black  max-w-[350px]">
                  You’ll learn practical skills that open doors, gain clarity
                  about your next phase, and grow within a community that
                  supports your progress always.
                </p>
                <h2 className="black">Clarity</h2>
              </div>
              <div className="card-img bg-why h-[350px] "  data-aos="fade-down" data-aos-delay="1300" ></div>
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
