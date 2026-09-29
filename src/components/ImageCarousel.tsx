import { MaxWidthContainer } from "./MaxWidthContainer";
import LeftArrow from "../assets/about-us/left-arrow.png";
import RightArrow from "../assets/about-us/right-arrow.png";
import { useCallback, useState } from "react";

interface CarouselImage {
    /** Image source URL or imported image */
    src: string;
    /** Alternative text for the image for accessibility */
    altText: string;
}

interface ImageCarouselProps {
    /** The header text to be displayed above the image carousel */
    title: string;
    /** An array of image objects containing source and alt text */
    images: CarouselImage[];
    /** The number of image slides to be displayed in the image carousel */
    numImages: number;
    /** The text to be displayed in the image carousel overlay */
    overlay: string;
}

/**
 * A responsive image carousel with overlay text that can display any number of image slides.
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
export const ImageCarousel = ({ title, images, numImages, overlay }: ImageCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = numImages;

    const nextSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? length - 1 : currentSlide - 1);
    };

    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide + 1 > length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, length]);

    return (
        <div className="bg-black">
            <MaxWidthContainer>
                <div className="mx-auto block w-3/4 max-md:w-full max-md:px-12 max-md:py-0">
                    <h1 className="mb-2 pt-4 text-right font-heading text-[5rem] text-white max-md:mb-0 max-md:text-[3rem]">
                        {title}
                    </h1>

                    <div className="relative aspect-video max-w-full p-0">
                        <img
                            className="absolute top-[45%] left-0 z-[1] mx-3 h-[10%] w-auto cursor-pointer border-none select-none hover:opacity-[0.85]"
                            src={LeftArrow}
                            alt="Arrow pointing left."
                            onClick={previousSlide}
                        />

                        {images.map((image, index) => {
                            return (
                                <div key={index}>
                                    {currentSlide === index && (
                                        <img
                                            className="h-full w-full border border-white object-cover"
                                            src={image.src}
                                            alt={image.altText}
                                            draggable="false"
                                        />
                                    )}
                                </div>
                            );
                        })}

                        <img
                            className="absolute top-[45%] right-0 z-[1] mx-3 h-[10%] w-auto cursor-pointer border-none select-none hover:opacity-[0.85]"
                            src={RightArrow}
                            alt="Arrow pointing right."
                            onClick={nextSlide}
                        />
                    </div>

                    <div className="absolute bottom-1 left-0 h-auto w-[45%] bg-white p-2 opacity-75 max-[1200px]:w-auto max-md:relative max-md:bottom-0 max-md:my-4 max-md:h-auto max-md:w-full max-md:overflow-visible max-md:bg-black max-md:p-0 max-md:opacity-100 max-md:[&_p]:text-dark-white">
                        <p>{overlay}</p>
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    );
};
