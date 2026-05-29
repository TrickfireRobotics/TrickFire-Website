import "./GradientLine.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * @component
 *
 * Gradient component that renders a green-to-pink line across the full width of its container.
 * The line slides out from left to right when it comes into view.
 * @returns {JSX.Element} returns an <hr> component with the class name 'gradient-line'
 */
export const GradientLine = () => {
  const lineRef = useRef(null);

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
        },
      );
    }
  }, []);

  return <hr className="gradient-line" ref={lineRef} />;
};
