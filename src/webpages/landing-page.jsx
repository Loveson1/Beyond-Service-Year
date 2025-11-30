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
} from "../components/index";

function LandingPage() {
  return (
    <div >
      <Hero />
      <Story />
      <Brand />
      <Why />
      <div className="bg-black">
      <Testimonials />
      <Resources />
      <Impact />
      <Faq />
    </div></div>
  );
}

export default LandingPage;
