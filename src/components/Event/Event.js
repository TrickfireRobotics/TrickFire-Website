import "./Event.scss";
import { PortableText } from "@portabletext/react";
import { BoxShadowImage } from "../BoxShadowImage/BoxShadowImage";
import { GradientLine } from "../GradientLine/GradientLine";
import { Button } from "../Button/Button";
import CalendarIcon from "../../assets/Events/EventCalendar.svg";
import LocationIcon from "../../assets/Events/EventLocation.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * @component
 *
 * Displays comprehensive event information including image, title, time, description, and action links.
 *
 * This component receives event data from Sanity and renders it in a two-column layout
 * with the event image on the left and event details on the right.
 *
 * @param {Object} img - Image object from Sanity
 * @param {string} altText - Alternative text to be displayed with the image
 * @param {string} title - The title of the event
 * @param {string} timeDescription - Description of the event timing
 * @param {string} locationDescription - Description of the event location
 * @param {Array} description - Array of portable text blocks describing the event
 * @param {Array<{href: string, name: string}>} [links] - Optional array of link objects with href and name properties
 * @returns {JSX.Element}
 *
 * @example
 * const eventData = {
 *   img: sanityImageObject,
 *   altDescription: "Workshop participants working on rover",
 *   title: "Robotics Workshop",
 *   timeDescription: "August 15-17, 2024 • 10:00 AM - 4:00 PM",
 *   description: portableTextBlocks,
 *   links: [
 *     { href: "https://example.com/register", name: "Register Now" },
 *     { href: "https://example.com/details", name: "More Details" }
 *   ]
 * };
 * <Event {...eventData} />
 */
export const Event = ({
  img,
  altText,
  title,
  timeDescription,
  locationDescription,
  description,
  links,
}) => {
  const eventRef = useRef(null);

  useEffect(() => {
    if (eventRef.current) {
      gsap.fromTo(
        eventRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: eventRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }
  }, []);

  return (
    <div className="event" ref={eventRef}>
      <div className="event-image-column">
        <div className="event-image-container">
          <BoxShadowImage
            className="event-image"
            imageSource={img}
            altText={altText}
          />
        </div>
      </div>
      <div className="event-text-column">
        <h2 className="event-title">{title}</h2>
        {timeDescription && (
          <div className="event-time">
            <img src={CalendarIcon} alt="Calendar Icon" />
            <p className="event-time-text">{timeDescription}</p>
          </div>
        )}
        {locationDescription && (
          <div className="event-location">
            <img src={LocationIcon} alt="Location Icon" />
            <p className="event-location-text">{locationDescription}</p>
          </div>
        )}
        <GradientLine />
        <div className="event-description">
          <PortableText value={description} />
        </div>
        <div className="event-link-container">
          {links?.map((link) => {
            return (
              <Button type="external" link={link.href} buttonText={link.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
