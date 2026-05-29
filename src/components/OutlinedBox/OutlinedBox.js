import './OutlinedBox.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { RepeatingTextBackground } from '../RepeatingTextBackground/RepeatingTextBackground';

/**
 * Renders a gray outlined box with text and a centered button.
 * 
 * This component displays content with a repeating background pattern and includes
 * a button for user action (internal navigation, external link, or custom handler).
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.backgroundText - Text to repeat as the background pattern
 * @param {string} props.text - The text content displayed within the outlined box
 * @param {('external'|'internal'|'default')} props.buttonType - The type of button behavior
 * @param {string} [props.link] - URL or route for the button (required for 'external' and 'internal' types)
 * @param {string} props.buttonText - The text to display on the button
 * @returns {JSX.Element} An outlined box component with button
 * 
 * @example
 * <OutlinedBox
 *   backgroundText="JOIN"
 *   text="Ready to be part of our team? Click below to apply!"
 *   buttonType="external"
 *   link="https://forms.example.com/apply"
 *   buttonText="Apply Now"
 * />
 */
export const OutlinedBox = ({backgroundText, text, buttonType, link, buttonText}) => {
    return (
        <RepeatingTextBackground backgroundText={backgroundText} >
            <MaxWidthContainer>
                <div className='outlined-box'>
                    <p className='text'>{text}</p>
                    <Button className='button' type={buttonType} link={link} buttonText={buttonText} />
                </div>
            </MaxWidthContainer>
        </RepeatingTextBackground>
    );
};
