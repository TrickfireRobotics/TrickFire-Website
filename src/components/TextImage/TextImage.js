import './TextImage.scss'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

export const TextImage = (props) => {
    return ( 
        <div class={props.imageOrder}>
            <div class="sideBySide">
                <div class="textSection">
                    <div class="subheaderAndUnderline">
                        <h2 class="subheader">{props.subheader}</h2>
                        <GradientLine />
                    </div>

                    <br></br>

                    <div class="textAndButton">
                        <p class="text">{props.text}</p>
                        <br></br>
                        <br></br>
                        {props.showButton && <Button link={props.link} buttonText={props.buttonText}/>}
                    </div>
                </div>

                <div class="imageSection">
                    <BoxShadowImage class="boxShadowImage" imageSource={props.imageSource} alternativeText={props.alternativeText}/>
                </div>
            </div> 
        </div> 
    )
}