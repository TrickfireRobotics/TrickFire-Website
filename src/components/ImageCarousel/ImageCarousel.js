import './ImageCarousel.scss'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'
import LeftArrow from '../../assets/AboutUs/leftArrow.png'
import RightArrow from '../../assets/AboutUs/rightArrow.png'

import { useCallback, useState } from "react";

export const ImageCarousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = 3

    const nextSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? length - 1 : currentSlide - 1);
    };
    
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide + 1 > length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, length]);

    return (
        <div class="image-carousel">
            <MaxWidthContainer>
                <h1 class="large-center-text">Our Story</h1>

                <div class="image-and-arrows">
                    <img class="arrow-button-left" src={LeftArrow} alt="Arrow pointing left." onClick={previousSlide}/>

                    {props.images.map((image, index) => {
                        return (
                            <div key={index}>
                                {currentSlide === index && <img src={image.src} alt={image.alt} draggable="false"/>}
                            </div>
                        );
                    })}

                    <img class="arrow-button-right" src={RightArrow} alt="Arrow pointing right." onClick={nextSlide}/>
                </div>

                <div class="overlay-text">
                    <p>TrickFire Robotics is a student team at UWB currently competing in the University Rover Challenge by the Mars Society. We previously competed in NASA Lunabotics, a lunar mining competition. Over the years, TrickFire has built a strong student and alumni community.</p>
                </div>
            </MaxWidthContainer>
        </div>
    )
}