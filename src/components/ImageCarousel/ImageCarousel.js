import './ImageCarousel.scss'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'
import LeftArrow from '../../assets/AboutUs/leftArrow.png'
import RightArrow from '../../assets/AboutUs/rightArrow.png'

export const ImageCarousel = (props) => {
    return (
        <div class="image-carousel">
            <MaxWidthContainer>
                <h1 class="large-center-text">Our Story</h1>

                <div class="image-and-arrows">
                    <img class="arrow-button-left" src={LeftArrow} alt="Arrow pointing left."/>

                    {props.images.map((image) =>
                        <div class="image-and-overlay" key={image.id}>
                            <img key={image.id} src={image.src} alt={image.alt} draggable="false"/>
                        </div>
                    )}

                    <img class="arrow-button-right" src={RightArrow} alt="Arrow pointing right."/>
                </div>

                <div class="overlay-text">
                    <p>TrickFire Robotics is a student team at UWB currently competing in the University Rover Challenge by the Mars Society. We previously competed in NASA Lunabotics, a lunar mining competition. Over the years, TrickFire has built a strong student and alumni community.</p>
                </div>
            </MaxWidthContainer>
        </div>
    )
}