import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OfficerProps {
    /** The photo that will be displayed in the main box. */
    image: string;
    /** The name that will be displayed over the officer's photo. */
    name: string;
    /** The position that officer holds within the club. */
    position: string;
}

/**
 * Renders each individual box containing officer information, including name and picture.
 */
export const Officer = ({ image, name, position }: OfficerProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                {
                    opacity: 0,
                    y: -10,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 60%",
                        once: true,
                    },
                }
            );
        }
    }, [image]);

    return (
        <div ref={cardRef} className="relative inline-block aspect-square w-1/5 max-md:w-4/5">
            <img className="block h-auto w-full" src={image} alt={name} />
            <div className="absolute bottom-0 left-0 h-1/4 w-full bg-white/75 p-2">
                <p className="font-heading text-2xl font-semibold text-black uppercase select-none">
                    {name}
                </p>
                <p className="font-body text-base font-normal text-black capitalize select-none">
                    {position}
                </p>
            </div>
        </div>
    );
};
