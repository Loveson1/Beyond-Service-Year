import { Routes, Route, Navigate } from "react-router-dom";

import {
  Hero,
  Brand,
  Story,
  Why,
  Testimonials,
  Resources,
  Impact,
  Faq,
  Footer,
} from "../components/index";

function LandingPage() {
  return (
    <div className="bg-black">
      <Hero />
      <Story />
      <Brand />
      <Why />
      <Testimonials />
      <Resources />
      <Impact />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage;
