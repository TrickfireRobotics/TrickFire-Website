import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface BoxShadowImageProps {
    imageSource: string;
    altText: string;
    /** Extra Tailwind classes for context-specific sizing/positioning. */
    className?: string;
}

/**
 * A standardized component for an image with a box shadow.
 * The image slides upwards and to the left to reveal the shadow behind it on scroll.
 *
 * @example
 * <BoxShadowImage imageSource={WatermelonDragon} altText="Watermelon Dragon"/>
 */
export const BoxShadowImage = ({ imageSource, altText, className }: BoxShadowImageProps) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0,
                    boxShadow: "0px 0px #00fe00",
                },
                {
                    opacity: 1,
                    boxShadow: "0.9rem 0.9rem #00fe00",
                    duration: 1,

                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }
    }, []);

    return (
        <img
            className={`border-4 border-eerie-black shadow-[0.9rem_0.9rem_0_var(--color-trickfire-green)] transition-transform duration-300 ease-in-out ${className ?? ""}`}
            src={imageSource}
            alt={altText}
            draggable="false"
            ref={imageRef}
        />
    );
};
