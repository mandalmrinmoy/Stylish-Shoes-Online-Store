import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />

      {/* Render the correct page */}
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
