import TrickFireLogo from "../assets/navbar/trick-fire-logo.png";
import Menu from "../assets/navbar/menu.png";
import Cross from "../assets/navbar/cross.png";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MaxWidthContainer } from "./MaxWidthContainer";

const subpageLinkClass =
    (extraClasses = "") =>
    ({ isActive }: { isActive: boolean }) =>
        `subpage-link ${extraClasses} ${isActive ? "active" : ""}`.trim();

/**
 * Navbar component that renders subpage navigation links.
 */
export const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const mobileWidthBreakpoint = 768;

    /**
     * Sets up a window resize listener to continuously update the viewportWidth state with the current size of the viewport.
     * It also clears the mobile navigation menu when the viewportWidth becomes greater than the mobileWidthBreakpoint.
     */
    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);

            if (window.innerWidth > mobileWidthBreakpoint) {
                setIsNavActive(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed z-[2] w-full border-b border-white bg-[#292929] px-12 py-1">
            <MaxWidthContainer className="h-full">
                <div className="flex h-20 w-full items-center justify-between">
                    {/* TrickFire Logo */}
                    <Link
                        className="h-4/5 rounded-lg hover:bg-[#444444]"
                        onClick={() => setIsNavActive(false)}
                        to="/"
                        aria-label="Go to TrickFire Robotics homepage"
                    >
                        <img
                            src={TrickFireLogo}
                            className="h-full w-auto"
                            alt="TrickFire Robotics logo"
                        />
                    </Link>
                    {viewportWidth > mobileWidthBreakpoint ? (
                        /* Desktop Subpage Navigation Menu */
                        <nav aria-label="Subpage Navigation">
                            <ul className="flex list-none gap-8 text-white">
                                <li>
                                    <NavLink
                                        className={subpageLinkClass()}
                                        to="/about-us"
                                        aria-label="Go to About Us page"
                                    >
                                        <span>About us</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={subpageLinkClass()}
                                        to="/get-involved"
                                        aria-label="Go to Get Involved page"
                                    >
                                        <span>Get Involved</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={subpageLinkClass()}
                                        to="/events"
                                        aria-label="Go to Events page"
                                    >
                                        <span>Events</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    ) : (
                        <button
                            className="flex w-8 items-center justify-center border-none bg-transparent"
                            onClick={() => setIsNavActive((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isNavActive}
                            aria-controls="mobile-subpage-nav"
                        >
                            <img
                                className="w-full"
                                src={isNavActive ? Cross : Menu}
                                alt={isNavActive ? "Close Menu Icon" : "Menu Icon"}
                            />
                        </button>
                    )}
                </div>
                {isNavActive && (
                    /* Mobile Navigation Menu */
                    <nav
                        className="flex h-[40svh] flex-col items-center gap-12 border-t border-white text-center text-white no-underline"
                        aria-label="Navigation Menu"
                    >
                        <ul className="my-auto flex h-[70%] list-none flex-col justify-between">
                            <li>
                                <NavLink
                                    className={subpageLinkClass("text-[2rem] mb-[5vh]")}
                                    onClick={() => setIsNavActive(false)}
                                    to="/"
                                    aria-label="Go to TrickFire Robotics homepage"
                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={subpageLinkClass("text-[2rem] mb-[5vh]")}
                                    onClick={() => setIsNavActive(false)}
                                    to="/about-us"
                                    aria-label="Go to About Us page"
                                >
                                    <span>About us</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={subpageLinkClass("text-[2rem] mb-[5vh]")}
                                    onClick={() => setIsNavActive(false)}
                                    to="/get-involved"
                                    aria-label="Go to Get Involved page"
                                >
                                    <span>Get Involved</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={subpageLinkClass("text-[2rem] mb-[5vh]")}
                                    onClick={() => setIsNavActive(false)}
                                    to="/events"
                                    aria-label="Go to Events page"
                                >
                                    <span>Events</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
            </MaxWidthContainer>
        </header>
    );
};
