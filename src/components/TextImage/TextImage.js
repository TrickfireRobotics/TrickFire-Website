import './TextImage.scss'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

/**
 * @component
 * 
 * TextImage component that ...
 * 
 * @param {string} props.imageOrder - "imageRight" or "imageLeft" determines which side the image and text are on.
 * @param {string} props.subheader - Subheader for the text section.
 * @param {string} props.imageSource - The image source.
 * @param {string} props.alternativeText - Alt text for the imageSource image.
 * @param {boolean} props.showButton - Whether or not there should be a button displayed.
 * @param {string} props.link - The link for the button.
 * @param {string} props.buttonText - The text to display on the button.
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

                        {props.showButton && <Button link={props.link} buttonText={props.buttonText}/>}
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