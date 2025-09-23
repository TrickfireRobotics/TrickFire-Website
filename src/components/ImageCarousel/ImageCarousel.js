import './ImageCarousel.scss'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'
import LeftArrow from '../../assets/AboutUs/leftArrow.png'
import RightArrow from '../../assets/AboutUs/rightArrow.png'
import { useCallback, useState } from "react";

/**
 * @component
 * 
 * A responsive image carousel with overlay text that can display any number of image slides.
 * 
 * @param {string} props.title - The header text to be displayed above the image carousel.
 * @param {array} props.images - An array containing image sources and alt text for images to be used in the image carousel.
 * @param {number} props.numImages - The number of image slides to be displayed in the image carousel.
 * @param {string} props.overlay - The text to be displayed in the image carousel overlay.
 * @returns {JSX.Element}
 */
export const ImageCarousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = props.numImages

    const nextSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? length - 1 : currentSlide - 1);
    };
    
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide + 1 > length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, length]);

    return (
        <div class="image-carousel">
            <MaxWidthContainer>
                <div class="partial-screen-cover">
                    <h1 class="large-right-text">{props.title}</h1>

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
                        <p>{props.overlay}</p>
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}