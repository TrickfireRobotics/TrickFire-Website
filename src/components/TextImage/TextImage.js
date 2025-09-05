import './TextImage.scss'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

export const TextImage = (props) => {
    return (
        <div class={props.imageOrder}>
            <div class="side-by-side">
                <div class="text-section">
                    <h2 class="subheader">{props.subheader}</h2>
                    <GradientLine />

                    <br class="desktop-image"></br>

                    <div class="mobile-image">
                        <BoxShadowImage class="box-shadow-image" imageSource={props.imageSource} alternativeText={props.alternativeText} />
                    </div>

                    <p class="text">{props.text}</p>
                    <br></br>
                    <br></br>
                    {props.showButton && <Button link={props.link} buttonText={props.buttonText} />}
                </div>

                <div class="image-section">
                    <div class="desktop-image">
                        <BoxShadowImage class="box-shadow-image" imageSource={props.imageSource} alternativeText={props.alternativeText} />
                    </div>
                </div>
            </div>
        </div>
    )
}