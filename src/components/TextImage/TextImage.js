import './TextImage.scss'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

/**
 * @component
 * 
 * Displays a responsive text and image section with flexible layout and optional action button.
 * 
 * This component renders text content alongside an image with the ability to reverse their positions.
 * It's commonly used for "About Us" or informational sections with calls-to-action.
 * 
 * @param {Object} props - Component props
 * @param {('image-left'|'image-right')} props.imageOrder - Position of the image relative to text
 * @param {string} props.subheader - Subheading for the text section
 * @param {(string|Array)} props.text - Body text (can be string or array with JSX elements like <br/>)
 * @param {string} props.imageSource - Image source (imported image or URL string)
 * @param {string} props.alternativeText - Alt text for accessibility
 * @param {boolean} [props.showButton=false] - Whether to display an action button
 * @param {('external'|'internal'|'default')} [props.buttonType='default'] - Button type for link behavior
 * @param {string} [props.link] - URL or route for the button (required if showButton is true)
 * @param {string} [props.buttonText] - Text to display on the button
 * @returns {JSX.Element}
 * 
 * @example
 * // With text array including line breaks
 * <TextImage 
 *   imageOrder="image-left"
 *   subheader="Join Us"
 *   text={["No experience needed.", <br/>, "New members welcomed year-round."]}
 *   imageSource={EventPhoto}
 *   alternativeText="Event participants"
 *   showButton={true}
 *   buttonType="external"
 *   link="https://forms.example.com/join"
 *   buttonText="Apply Now"
 * />
 */
export const TextImage = ({imageOrder, subheader, text, imageSource, alternativeText, showButton, buttonType, buttonText, link, isLink, isSubPage}) => {
    return (
        <div className="text-image">
            <div className={imageOrder}>
                <div className="side-by-side">
                    <div className="text-section">
                        <h2 className="subheader">{subheader}</h2>
                        <GradientLine />

                        <div className="mobile-image">
                            <BoxShadowImage className="box-shadow-image" imageSource={imageSource} alternativeText={alternativeText} />
                        </div>

                        <p className="text">
                            {/** Adds keys to each element for better React tracking */}
                            {Array.isArray(text) ? text.map((item, index) => (
                                <span key={index}>{item}</span>
                            )) : text}
                        </p>

                        {showButton && <Button type={buttonType} link={link} buttonText={buttonText} />}
                    </div>

                    <div className="image-section">
                        <div className="desktop-image">
                            <BoxShadowImage className="box-shadow-image" imageSource={imageSource} alternativeText={alternativeText} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}