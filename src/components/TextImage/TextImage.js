import './TextImage.scss'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

/**
 * @component
 * 
 * A responsive (and reversible) text/image component that displays text and an image according to layout input.
 * 
 * @param {string} props.imageOrder - "imageRight" or "imageLeft" dictates which side of the text the image is on.
 * @param {string} props.subheader - Subheading for the text section.
 * @param {string} props.text - Body text for the text section.
 * @param {string} props.imageSource - The image source.
 * @param {string} props.alternativeText - Alt text for the imageSource image.
 * @param {boolean} props.showButton - Whether or not a button is desired/should be displayed.
 * @param {string} props.link - The link or destination for the button.
 * @param {string} props.buttonText - The text/label for the button.
 * @returns {JSX.Element}
 */
export const TextImage = (props) => {
    return ( 
        <div class="text-image">
            <div class={props.imageOrder}>
                <div class="side-by-side">
                    <div class="text-section">
                        <h2 class="subheader">{props.subheader}</h2>
                        <GradientLine />

                        <div class="mobile-image">
                            <BoxShadowImage class="box-shadow-image" imageSource={props.imageSource} alternativeText={props.alternativeText}/>
                        </div>

                        <p class="text">{props.text}</p>

                        {props.showButton && <Button isLink={props.isLink} isSubpageLink={props.isSubpageLink} link={props.link} buttonText={props.buttonText}/>}
                    </div>

                    <div class="image-section">
                        <div class="desktop-image">
                            <BoxShadowImage class="box-shadow-image" imageSource={props.imageSource} alternativeText={props.alternativeText}/>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    )
}