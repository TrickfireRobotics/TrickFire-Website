import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Layout container component that places the footer and navbar at the top and bottom of the page.
 */
export const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <div className="w-full pt-[5.5rem]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
