import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders a green-to-pink line across the full width of its container.
 * The line slides out from left to right when it comes into view.
 */
export const GradientLine = () => {
    const lineRef = useRef<HTMLHRElement>(null);

    useEffect(() => {
        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }
    }, []);

    return (
        <hr
            className="h-1 w-full origin-left border-none bg-gradient-to-r from-trickfire-green to-accent-pink"
            ref={lineRef}
        />
    );
};
