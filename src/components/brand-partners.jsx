export default function Hero() {
  return (
    <div className=" flex flex-col items-center justify-center bg-blend-darken bg-black/60 bg-story bg-cover max-sm:bg-center bg-no-repeat w-screen h-screen ">
      {/* hero section */}
      <div className="container lg:w-[600px] m-auto max-sm:flex flex-col ">
        <div>
          {/* headline and subhead */}
          <h1 className="lg:w-[600px] ">Our Story</h1>
          <p className="mt-lg opacity-90 lg:w-[520px] text-h">
            Beyond Service Year (BSY) began as a God-given vision to guide
            Nigerian youths who often feel lost after NYSC. What started as one
            person’s yes to purpose has grown into a movement helping young
            Nigerians gain clarity, confidence, and direction for life after
            service. Our goal is to raise a generation that knows who they are,
            what they carry, and how to walk boldly into the future God has
            prepared for them. BSY is not just a company, not just a community,
            but a family and a movement.
          </p>
        </div>
        {/* buttons */}
        <div className="flex justify-end gap-5 mt-lg max-sm:flex-col max-sm:opacity-80">
          <button className="btn-yellow btn"> Join the Movement</button>
          <button className="btn-white  btn"> Read our Story</button>
        </div>
      </div>
    </div>
  );
}
