import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout";
import LandingPage from "./webpages/landing-page";
import ResourcePage from "./webpages/resources-page";
// import AboutPage from "./webpages/AboutPage";
// import ContactPage from "./webpages/ContactPage";
// import PartnershipPage from "./webpages/PartnershipPage";

function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<LandingPage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path="resource" element={<ResourcePage />} />
        {/* <Route path="contact" element={<ContactPage />} /> */}
        {/* <Route path="partnership" element={<PartnershipPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
