import "./BoxShadowImage.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * @component
 *
 * A standardized component for an image with a box shadow.
 * The image slides upwards and to the left to reveal the shadow behind it on scroll.
 *
 * @param {Image} imageSource - The image source (URL or imported image)
 * @param {string} altText - Alternative text to add to the image
 * @returns {JSX.Element} An image component with the class name 'box-shadow-image'
 *
 * @example
 * <BoxShadowImage imageSource={WatermelonDragon} altText="Watermelon Dragon"/>
 */
export const BoxShadowImage = ({ imageSource, altText }) => {
  const imageRef = useRef(null);

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
        },
      );
    }
  }, []);

  return (
    <img
      className="box-shadow-image"
      src={imageSource}
      alt={altText}
      draggable="false"
      ref={imageRef}
    />
  );
};
