import "./Layout.scss";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * @component
 *
 * Layout container component that places the footer and navbar at the top and bottom of the page.
 * @returns {JSX.Element}
 */

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="layout">
      <Navbar className="navbar" />
      <div className="main-content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
