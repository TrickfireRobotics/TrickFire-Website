import { GradientLine } from "./GradientLine";
import { MaxWidthContainer } from "./MaxWidthContainer";
import { links } from "./Links";

const date = new Date();

/**
 * Footer component that renders the social media links and copyright information.
 */
export const Footer = () => {
    return (
        <footer className="bg-eerie-black" role="contentinfo">
            <GradientLine />
            <MaxWidthContainer className="flex flex-col justify-center gap-8 py-8">
                <nav aria-label="Social media links" className="mx-auto">
                    <ul className="mx-auto flex items-center justify-center gap-8">
                        {links.map((link) => (
                            <li className="social-list-item" key={link.url}>
                                <a
                                    className="social-link"
                                    href={link.url}
                                    aria-label={"Go to " + link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={link.img} alt={link.name + " logo"} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <p className="mx-auto px-[5%] text-center text-dark-white">
                    Copyright © {date.getFullYear()} TrickFire Robotics.
                    <br />
                    All rights reserved.
                    <br />
                    Bothell, WA.
                </p>
            </MaxWidthContainer>
        </footer>
    );
};
