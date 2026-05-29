import './ImageCarousel.scss'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'
import LeftArrow from '../../assets/AboutUs/leftArrow.png'
import RightArrow from '../../assets/AboutUs/rightArrow.png'
import { useCallback, useState } from "react";

/**
 * @typedef {Object} CarouselImage
 * @property {string} src - Image source URL or imported image
 * @property {string} altText - Alternative text for the image for accessibility
 */

/**
 * @component
 * 
 * A responsive image carousel with overlay text that can display any number of image slides.
 * 
 * @param {string} title - The header text to be displayed above the image carousel
 * @param {Array<CarouselImage>} images - An array of image objects containing source and alt text
 * @param {number} numImages - The number of image slides to be displayed in the image carousel
 * @param {string} overlay - The text to be displayed in the image carousel overlay
 * @returns {JSX.Element}
 * 
 * @example
 * const carouselImages = [
 *   { src: TeamPhoto1, altText: "Team photo from event 1" },
 *   { src: TeamPhoto2, altText: "Team photo from event 2" },
 *   { src: TeamPhoto3, altText: "Team photo from event 3" }
 * ];
 * <ImageCarousel 
 *   title="Photo Gallery" 
 *   images={carouselImages} 
 *   numImages={3} 
 *   overlay="Our Amazing Team"
 * />
 */
export const ImageCarousel = ({title, images, numImages, overlay}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = numImages

    const nextSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? length - 1 : currentSlide - 1);
    };
    
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide + 1 > length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, length]);

    return (
        <div className="image-carousel">
            <MaxWidthContainer>
                <div className="partial-screen-cover">
                    <h1 className="large-right-text">{title}</h1>

                    <div className="image-and-arrows">
                        <img className="arrow-button-left" src={LeftArrow} alt="Arrow pointing left." onClick={previousSlide}/>

                        {images.map((image, index) => {
                            return (
                                <div key={index}>
                                    {currentSlide === index && <img src={image.src} alt={image.altText} draggable="false"/>}
                                </div>
                            );
                        })}

                        <img className="arrow-button-right" src={RightArrow} alt="Arrow pointing right." onClick={nextSlide}/>
                    </div>

                    <div className="overlay-text">
                        <p>{overlay}</p>
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}