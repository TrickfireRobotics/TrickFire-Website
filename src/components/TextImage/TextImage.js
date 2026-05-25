import "./TextImage.scss";
import { GradientLine } from "../GradientLine/GradientLine";
import { Button } from "../Button/Button";
import { BoxShadowImage } from "../BoxShadowImage/BoxShadowImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * @component
 *
 * Displays a responsive text and image section with flexible layout and optional action button.
 *
 * This component renders text content alongside an image with the ability to reverse their positions.
 * It's commonly used for "About Us" or informational sections with calls-to-action.
 *
 * @param {('image-left'|'image-right')} imageOrder - Position of the image relative to text
 * @param {string} subheader - Subheading for the text section
 * @param {(string|Array)} text - Body text (can be string or array with JSX elements like <br/>)
 * @param {string} imageSource - Image source (imported image or URL string)
 * @param {string} alternativeText - Alt text for accessibility
 * @param {boolean} [showButton=false] - Whether to display an action button
 * @param {('external'|'internal'|'default')} [buttonType='default'] - Button type for link behavior
 * @param {string} [link] - URL or route for the button (required if showButton is true)
 * @param {string} [buttonText] - Text to display on the button
 * @returns {JSX.Element}
 *
 * @example
 * // With text array including line breaks
 * <TextImage
 *   imageOrder="image-left"
 *   subheader="Join Us"
 *   text={["No experience needed.", <br/>, "New members welcomed year-round."]}
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
}) => {
  const textSectionRef = useRef(null);

  useEffect(() => {
    if (textSectionRef.current) {
      const isImageLeft = imageOrder === "image-left";
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
        },
      );
    }
  }, [imageOrder]);

  return (
    <div className="text-image">
      <div className={imageOrder}>
        <div className="side-by-side">
          <div className="text-section" ref={textSectionRef}>
            <h2 className="subheader">{subheader}</h2>
            <GradientLine />

            <div className="mobile-image">
              <BoxShadowImage
                className="box-shadow-image"
                imageSource={imageSource}
                altText={altText}
              />
            </div>

            <p className="text">
              {/** Adds keys to each element for better React tracking */}
              {Array.isArray(text)
                ? text.map((item, index) => <span key={index}>{item}</span>)
                : text}
            </p>

            {showButton && (
              <Button type={buttonType} link={link} buttonText={buttonText} />
            )}
          </div>

          <div className="image-section">
            <div className="desktop-image">
              <BoxShadowImage
                className="box-shadow-image"
                imageSource={imageSource}
                alternativeText={altText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
