import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
         {/* 👈 Where the page components render */}
      </main>
    </div>
  );
};

export default Layout;
