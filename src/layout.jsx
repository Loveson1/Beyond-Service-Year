import { Outlet } from "react-router-dom";
import { Footer } from "./components";


const Layout = () => {
  return (
    <div >
        <Outlet />
         <Footer />
    </div>
  );
};

export default Layout;
