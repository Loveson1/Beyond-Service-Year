import { useState } from "react";
export default function Faq() {
  // state for rendering the accordion
  const [activeIndex, setActiveIndex] = useState(null);

  //   faq content
  const Faq = [
    {
      title: " What kind of product can i shop for on Sefrel Shop?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: " Are the products original and of good quality?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: " How do I place an order?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: " Can I search for vendors near me?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: " What payment method do you accept?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: "Can I return a product?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
    {
      title: " Why should I shop Made - in - Nigeria?",
      content:
        "Only authentically Made-in-Nigeria products, from fashion and skincare to food, crafts, and more",
    },
  ];

  //   function for controlling faq accordion
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-gradient-to-b from-blue to-black">
    <div className=" container ">
      {/* faq head */}
      <h1 className="text-center pt-10 mb-sm">
        Frequently asked questions
      </h1>
      <p className="text-center pb-20">
        Can’t find the answer here? Check out our Help Center.
      </p>
      {/* faq content */}
      <div className="flex flex-col justify-center gap-6 ">
        {Faq.map((f, index) => (
          <div
            key={index}
            className="border-b border-blue border-opacity-40 transition "
          >
            <div className="flex justify-between gap-20 ">
              <button onClick={() => toggle(index)} className="text-left">
                <p className="font-medium mb-6  ">{f.title}</p>
              </button>
              <button
                onClick={() => toggle(index)}
                className="size-6 object-contain text-white"
              >
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {/* accordion display for laptop */}
            <div
              className={`transition-all duration-500 ease-in-out hidden xl:block  ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mb-6 ">{f.content}</p>
            </div>
            {/* accordion display for mobile and tablet */}
            {activeIndex === index && (
              <div className=" hidden max-xl:block">
                <p className="mb-6   ">{f.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
}
