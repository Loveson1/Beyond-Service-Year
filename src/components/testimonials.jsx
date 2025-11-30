import { useEffect, useState } from "react";
import image from "../assets/images/hero.webp";
import testimonial1 from "../assets/images/Dami.webp";
import testimonial2 from "../assets/images/Esther.jpg";
import testimonial3 from "../assets/images/Favour.jpg";
import testimonial4 from "../assets/images/Stephenson.jpg";
import testimonial5 from "../assets/images/Adeola.jpg";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { id: 1, image:testimonial1, content: "The gap between the designer I was before BSY and the one I’ve become now is massive. BSY helped me evolve into a truly creative graphic designer. I don't just design now, I communicate your ideas and your messages through visuals creatively. My creativity has improved ever since joining BSY. So, thank you, BSY for everything.", name: "Adedamola ", specialty: "Creative Graphic Designer" },
    { id: 2, image:testimonial2, content: "I joined BSY for just a three days webinar, let me just attend, and guess what? BSY has already landed me an internship program. BSY has done a lot from LinkedIn optimization to actually making it out there, like telling my story out there with boldness. The internship program is what I actually needed at this particular point in time, and BSY has provided me this opportunity with Isentry.", name: "Esther", specialty: "Customer Support Specialist" },
    { id: 3, image:testimonial3, content: "BSY helped me go back to a career I had abandoned and land my first internship with Isentry Technologies. After their three-day webinar, I got my first internship in less than three months. When I posted about it on LinkedIn, it went viral and doubled my followers in 24 hours. BSY has impacted my life massively.", name: "Chioma", specialty: "Creative Graphic Designer" },
    { id: 4, image:testimonial4, content: "Working on the BSY Pulse project pushed me out of my comfort zone with new tools, responsibilities, and expectations. But through the late nights and moments of doubt, I grew. I'm proud of what I learned, the work I did, and the team I built this with. Thank you, BSY.", name: "Precious ", specialty: "Social Media Manager" },
    { id: 5, image:testimonial5, content: "I was transitioning into software engineering and desperately needed an internship. I sent out CVs everywhere, but nothing happened. Then I joined BSY as a volunteer. One thing led to another, and through BSY's partnership with other companies, an internship opportunity opened up. After the assessment, I got in. This wouldn't have happened without BSY. BSY is a community of amazing people and great minds that has shaped the way I think and reason. Thank you, BSY.", name: "Adeola", specialty: "Frontend Developer" },
  ];

  const visibleImages = 1; // show 3 out of 5
  const imageHeight = 250; // in px
  const gap = 20; // in px

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container pb-20">
      <div className="mx-auto">
        {/* headline */}
        <h1 className="text-center mb-sm"  data-aos="fade-down" data-aos-delay="500" >Testimonials</h1>
        <p className="text-center mb-xl"  data-aos="fade-down" data-aos-delay="500" >
          Don&apos;t take our word for it. Here&apos;s what people like you are saying
        </p>

        <div className="flex gap-5 sm:gap-10 justify-center max-sm:flex-col items-end max-sm:items-center">
          {/* ==== Testifier images ==== */}
          <div
            className="overflow-hidden h-[830px]" // show 3 images (3*250 + 2*20)
            style={{
              height: `${visibleImages * imageHeight + (visibleImages - 1) * gap}px`,
            }}

             data-aos="fade-down" data-aos-delay="400" 
          >
            <div
              className="flex flex-col gap-5 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${activeIndex * (imageHeight + gap)}px)`,
              }}
            >
              {testimonials.map((card, index) => (
                <img
                  key={card.id}
                  src={card.image}
                  alt={card.name}
                  className={`w-[250px] h-[250px] object-cover rounded-[15px] transition-all duration-500 ${
                    index === activeIndex ? "opacity-100 scale-100" : "opacity-60 scale-90"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ==== Testimonial Content ==== */}
          <div  data-aos="fade-down" data-aos-delay="600"  className="max-sm:w-[250px] sm:w-[500px] sm:h-[250px] justify-between flex flex-col bg-white p-8 rounded-[15px] shadow-md transition-all duration-700">
            <p className="mb-sm black text-xs">{testimonials[activeIndex].content}</p>
            <div><h2 className="font-bold black">{testimonials[activeIndex].name}</h2>
            <hr className="my-2" />
            <p className="text-sm text-gray-600">{testimonials[activeIndex].specialty}</p></div>
          </div>

          {/* ==== Indicator ==== */}
          <div  data-aos="fade-down" data-aos-delay="800"  className="flex flex-col gap-3 max-sm:flex-row max-sm:items-center bg-white py-2 px-3 sm:py-3 sm:px-2 rounded-3xl">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-yellow" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
