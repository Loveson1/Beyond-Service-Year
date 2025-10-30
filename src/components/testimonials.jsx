import { useEffect, useState } from "react";
import image from "../assets/images/hero.webp";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { id: 1, image, content: "I love BSY  ", name: "Adeola", specialty: "Frontend Developer" },
    { id: 2, image, content: "BSY changed my life", name: "Sarah", specialty: "UI/UX Designer" },
    { id: 3, image, content: "The best program ever", name: "John", specialty: "Backend Developer" },
    { id: 4, image, content: "Incredible experience!", name: "Lisa", specialty: "Product Manager" },
    { id: 5, image, content: "Highly recommend BSY!", name: "Michael", specialty: "Data Analyst" },
  ];

  const visibleImages = 1; // show 3 out of 5
  const imageHeight = 250; // in px
  const gap = 20; // in px

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container pb-20">
      <div className="mx-auto">
        {/* headline */}
        <h1 className="text-center mb-sm">Testimonials</h1>
        <p className="text-center mb-xl">
          Don&apos;t take our word for it. Here&apos;s what people like you are saying
        </p>

        <div className="flex gap-5 sm:gap-10 justify-center max-sm:flex-col items-end max-sm:items-center">
          {/* ==== Testifier images ==== */}
          <div
            className="overflow-hidden h-[830px]" // show 3 images (3*250 + 2*20)
            style={{
              height: `${visibleImages * imageHeight + (visibleImages - 1) * gap}px`,
            }}
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
          <div className="max-sm:w-[250px] sm:w-[500px] h-[250px] justify-between flex flex-col bg-white p-8 rounded-[15px] shadow-md transition-all duration-700">
            <p className="text-lg mb-sm black">{testimonials[activeIndex].content}</p>
            <div><h2 className="font-bold black">{testimonials[activeIndex].name}</h2>
            <hr className="my-2" />
            <p className="text-sm text-gray-600">{testimonials[activeIndex].specialty}</p></div>
          </div>

          {/* ==== Indicator ==== */}
          <div className="flex flex-col gap-3 max-sm:flex-row max-sm:items-center bg-white p-3 rounded-3xl">
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
