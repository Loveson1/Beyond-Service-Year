import { Outlet } from "react-router-dom";
import { Footer } from "./components";
import Navbar from "./components/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="bg-black"><Footer /></div>
    </div>
  );
};

export default Layout;
