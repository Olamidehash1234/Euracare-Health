import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import ScrollToTop from "./ScrollToTop";
import { useAnalytics } from "../hooks/useAnalytics";

const Layout = () => {
  // Track page views for all routes
  useAnalytics();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Banner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
