import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import React from "react";
import ScrollToTop from "./components/scroll-to-top";
// import AboutPage from "./webpages/AboutPage";
// import PartnershipPage from "./webpages/PartnershipPage";

const LandingPage  = React.lazy(()=> import("./webpages/landing-page"));
const ResourcePage = React.lazy(()=> import("./webpages/resources-page"));
const ContactPage = React.lazy(()=> import("./webpages/contact"));
const AboutPage = React.lazy(()=> import("./webpages/about"));

function App() {
  return (
    <React.Suspense fallback={<div className="flex justify-center items-center font-bold text-blue h-screen">Loading...</div>}>
    <ScrollToTop/>
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resource" element={<ResourcePage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* <Route path="partnership" element={<PartnershipPage />} /> */}
      </Route>
    </Routes>
    </React.Suspense>
  );
}

export default App;
