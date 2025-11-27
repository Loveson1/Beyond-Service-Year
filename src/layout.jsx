import { Outlet } from "react-router-dom";
import { Footer } from "./components";
import Navbar from "./components/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
