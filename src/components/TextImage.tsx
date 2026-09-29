import { GradientLine } from "./GradientLine";
import { Button } from "./Button";
import { BoxShadowImage } from "./BoxShadowImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TextImageProps {
    /** Position of the image relative to text */
    imageOrder: "image-left" | "image-right";
    subheader: string;
    /** Body text (can be a string or an array mixing strings with JSX elements like <br/>) */
    text: ReactNode;
    /** Image source (imported image or URL string) */
    imageSource: string;
    /** Alt text for accessibility */
    alternativeText: string;
    /** Whether to display an action button */
    showButton?: boolean;
    /** Button type for link behavior */
    buttonType?: "external" | "internal" | "default";
    /** URL or route for the button (required if showButton is true) */
    link?: string;
    buttonText?: string;
}

/**
 * Displays a responsive text and image section with flexible layout and optional action button.
 *
 * This component renders text content alongside an image with the ability to reverse their positions.
 * It's commonly used for "About Us" or informational sections with calls-to-action.
 *
 * @example
 * <TextImage
 *   imageOrder="image-left"
 *   subheader="Join Us"
 *   text={["No experience needed.", <br key="br"/>, "New members welcomed year-round."]}
 *   imageSource={EventPhoto}
 *   alternativeText="Event participants"
 *   showButton={true}
 *   buttonType="external"
 *   link="https://forms.example.com/join"
 *   buttonText="Apply Now"
 * />
 */
export const TextImage = ({
    imageOrder,
    subheader,
    text,
    imageSource,
    alternativeText: altText,
    showButton,
    buttonType,
    buttonText,
    link,
}: TextImageProps) => {
    const textSectionRef = useRef<HTMLDivElement>(null);
    const isImageLeft = imageOrder === "image-left";

    useEffect(() => {
        if (textSectionRef.current) {
            gsap.fromTo(
                textSectionRef.current,
                {
                    opacity: 0,
                    x: isImageLeft ? 50 : -50,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: textSectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }
    }, [imageOrder, isImageLeft]);

    return (
        <div className="w-full bg-eerie-black px-[5vw] pt-[4vw] pb-[5vw] max-md:px-0 max-md:py-12">
            <div className="inline-flex w-full items-center justify-center max-md:flex max-md:flex-col max-md:flex-wrap">
                <div
                    className={`mx-auto h-auto w-1/2 items-center max-md:order-0 max-md:mx-12 max-md:block max-md:!w-[85%] max-md:[&_button]:w-full ${isImageLeft ? "order-1" : "order-0"}`}
                    ref={textSectionRef}
                >
                    <h2 className="pb-[0.25em] font-heading text-[3rem] font-bold text-white max-md:text-[2rem]">
                        {subheader}
                    </h2>
                    <GradientLine />

                    <div className="hidden max-md:block">
                        <BoxShadowImage
                            imageSource={imageSource}
                            altText={altText}
                            className="mx-auto mt-12 block w-full"
                        />
                    </div>

                    <div className="pt-4 pb-8 font-body text-[1.1rem] leading-[1.6] font-normal text-dark-white [&_a:hover]:opacity-90 [&_a]:text-white [&_a]:underline [&_ul]:pl-4 max-md:-mt-8 max-md:text-base">
                        {/** Adds keys to each element for better React tracking */}
                        {Array.isArray(text)
                            ? text.map((item, index) => <span key={index}>{item}</span>)
                            : text}
                    </div>

                    {showButton && <Button type={buttonType} link={link} buttonText={buttonText} />}
                </div>

                <div
                    className={`mx-auto h-auto w-1/2 items-center max-md:order-1 max-md:mx-12 max-md:block max-md:!w-[85%] ${isImageLeft ? "order-0" : "order-1"}`}
                >
                    <div className="block max-md:hidden">
                        <BoxShadowImage
                            imageSource={imageSource}
                            altText={altText}
                            className={`block w-[85%] ${isImageLeft ? "mr-auto ml-0" : "mr-0 ml-auto"}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
