import { PortableText } from "@portabletext/react";
import { BoxShadowImage } from "./BoxShadowImage";
import { GradientLine } from "./GradientLine";
import { Button } from "./Button";
import CalendarIcon from "../assets/events/event-calendar.svg";
import LocationIcon from "../assets/events/event-location.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import type { EventDoc } from "../types/sanity";

gsap.registerPlugin(ScrollTrigger);

interface EventProps {
    /** Resolved image URL for the event */
    img: string;
    altText?: string;
    title: string;
    timeDescription?: string;
    locationDescription?: string;
    /** Array of portable text blocks describing the event */
    description: EventDoc["description"];
    links?: EventDoc["links"];
}

/**
 * Displays comprehensive event information including image, title, time, description, and action links.
 *
 * This component receives event data from Sanity and renders it in a two-column layout
 * with the event image on the left and event details on the right.
 */
export const Event = ({
    img,
    altText,
    title,
    timeDescription,
    locationDescription,
    description,
    links,
}: EventProps) => {
    const eventRef = useRef<HTMLDivElement>(null);

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
                }
            );
        }
    }, []);

    return (
        <div
            className="flex w-full border border-white bg-eerie-black max-md:flex-col"
            ref={eventRef}
        >
            <div className="flex w-[35%] justify-center bg-[#111] pt-4 pr-4 pb-8 pl-1 max-md:w-full">
                <div className="h-auto w-[90%]">
                    <BoxShadowImage
                        imageSource={img}
                        altText={altText ?? title}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex w-[70%] flex-col px-7 py-8 max-md:w-full">
                <h2 className="pb-1 text-[3rem] text-white">{title}</h2>
                {timeDescription && (
                    <div className="flex items-center gap-3 py-2 text-[1.15rem] font-bold text-dark-white uppercase">
                        <img src={CalendarIcon} alt="Calendar Icon" />
                        <p>{timeDescription}</p>
                    </div>
                )}
                {locationDescription && (
                    <div className="flex items-center gap-3 py-2 text-[1.15rem] font-bold text-dark-white uppercase">
                        <img src={LocationIcon} alt="Location Icon" />
                        <p>{locationDescription}</p>
                    </div>
                )}
                <GradientLine />
                <div className="min-h-[10rem] py-4 text-[1.15rem] text-dark-white">
                    <PortableText value={description} />
                </div>
                <div className="mt-auto flex flex-wrap gap-4">
                    {links?.map((link) => (
                        <Button
                            key={link.href}
                            type="external"
                            link={link.href}
                            buttonText={link.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
