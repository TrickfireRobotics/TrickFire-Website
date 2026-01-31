import './Button.scss'
import { Link } from 'react-router-dom';

/**
 * Scrolls to the top of the page with smooth behavior.
 */
const smoothScroll = () => window.scrollTo({top: 0, behavior: 'smooth'})

/**
 * @component
 * 
 * A versatile button component that supports internal navigation, external links, and default buttons.
 * 
 * @param {Object} props - Component props
 * @param {('external'|'internal'|'default')} [type='default'] - The type of button:
 *   - 'external': Opens an external URL in a new tab
 *   - 'internal': Navigates to an internal route using React Router
 *   - 'default': Standard button with optional onClick handler
 * @param {string} [link] - The URL or route path (required for 'external' and 'internal' types)
 * @param {string} buttonText - The text to display on the button
 * @param {Function} [onClick] - Callback function for the click event (used with 'default' type)
 * @param {string} [className] - Additional CSS class names to apply to the button component
 * @returns {JSX.Element} A button component wrapped in a div with class 'button-component'
 * 
 * @example
 * // External link button
 * <Button type="external" link="https://example.com" buttonText="Visit Site" />
 */
export const Button = ({type = 'default', link, buttonText, onClick}) => {
    
    return (        
        <div className="button-component">
            {type === 'external' && <a href={link} target="_blank" rel="noreferrer"><button aria-label={`${buttonText}, opens in a new tab`}>{buttonText} →</button></a>}
            {type === 'internal' && <Link to={link} onClick={smoothScroll}><button aria-label={`Navigate to ${buttonText}`}>{buttonText} →</button></Link>}
            {type === 'default' && <button aria-label={buttonText} onClick={onClick}>{buttonText}</button>}
        </div>
    )
}