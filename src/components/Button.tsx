import { Link } from "react-router-dom";

/**
 * Scrolls to the top of the page with smooth behavior.
 */
const smoothScroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

const buttonClasses =
    "flex items-center justify-center border-none bg-trickfire-green px-4 py-[0.65rem] transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:opacity-[0.85] hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]";
const linkClasses =
    "flex h-full w-full items-center justify-center font-heading text-2xl [line-height:normal] font-semibold text-black uppercase no-underline";

interface ButtonProps {
    /**
     * - 'external': Opens an external URL in a new tab
     * - 'internal': Navigates to an internal route using React Router
     * - 'default': Standard button with optional onClick handler
     */
    type?: "external" | "internal" | "default";
    /** The URL or route path (required for 'external' and 'internal' types) */
    link?: string;
    buttonText?: string;
    onClick?: () => void;
}

/**
 * A versatile button component that supports internal navigation, external links, and default buttons.
 *
 * @example
 * <Button type="external" link="https://example.com" buttonText="Visit Site" />
 */
export const Button = ({ type = "default", link, buttonText, onClick }: ButtonProps) => {
    return (
        <div className="button-component">
            {type === "external" && (
                <button aria-label={`${buttonText}, opens in a new tab`} className={buttonClasses}>
                    <a href={link} target="_blank" rel="noreferrer" className={linkClasses}>
                        {buttonText} →
                    </a>
                </button>
            )}
            {type === "internal" && link && (
                <button aria-label={`Navigate to ${buttonText}`} className={buttonClasses}>
                    <Link to={link} onClick={smoothScroll} className={linkClasses}>
                        {buttonText} →
                    </Link>
                </button>
            )}
            {type === "default" && (
                <button aria-label={buttonText} onClick={onClick} className={buttonClasses}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};
