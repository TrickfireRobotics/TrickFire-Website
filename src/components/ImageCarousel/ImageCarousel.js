import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'
import './ImageCarousel.scss'

export const ImageCarousel = (props) => {
    return (
        <div class="image-carousel">
            <MaxWidthContainer>
                <h1 class="large-center-text">Our Story</h1>

                <div class="images">
                    {props.images.map((image) =>
                        <div class="image-and-overlay" key={image.id}>
                            <img key={image.id} src={image.src} alt={image.alt} draggable="false"/>
                            <div class="overlay-text">
                                <p>TrickFire Robotics is a student team at UWB currently competing in the University Rover Challenge by the Mars Society. We previously competed in NASA Lunabotics, a lunar mining competition. Over the years, TrickFire has built a strong student and alumni community.</p>
                            </div>
                            {/*<p class="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>*/}
                        </div>
                    )}
                </div>
            </MaxWidthContainer>
        </div>
    )
}