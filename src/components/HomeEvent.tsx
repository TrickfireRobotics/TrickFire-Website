import { GradientLine } from "./GradientLine";
import placeholderImage from "../assets/homepage/event-placeholder.png";
import { MaxWidthContainer } from "./MaxWidthContainer";
import { urlFor } from "../assets/sanity-client";
import eventsBackgroundTile from "../assets/events/events-background-tile.png";
import CalendarIcon from "../assets/events/event-calendar.svg";
import LocationIcon from "../assets/events/event-location.svg";
import { client } from "../assets/sanity-client";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { BoxShadowImage } from "./BoxShadowImage";
import type { EventDoc } from "../types/sanity";

/**
 * Component for the Homepage that fetches and displays information on the most recent event
 */
export const HomeEvent = () => {
    const [event, setEvent] = useState<EventDoc | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        client
            .fetch<EventDoc | null>(`*[_type == "events"] | order(formattedDate asc)[0]`)
            .then((data) => setEvent(data))
            .catch((err: unknown) => console.log(err));
    }, []);

    return (
        <div
            className="border-y border-white/40 bg-repeat"
            style={{ backgroundImage: `url(${eventsBackgroundTile})`, backgroundPosition: "-50%" }}
        >
            <MaxWidthContainer className="flex justify-between px-[5vw] py-[5vw] max-md:flex-col-reverse max-md:gap-16">
                {event ? (
                    /** Event Display */
                    <div className="flex w-[45%] flex-col items-center border border-white bg-eerie-black text-white max-md:w-full">
                        <div className="flex w-full justify-center overflow-hidden bg-[#111] p-8">
                            <BoxShadowImage
                                imageSource={
                                    event.img
                                        ? urlFor(event.img).auto("format").url()
                                        : placeholderImage
                                }
                                altText={event.altText || "Event image"}
                                className="mt-auto mr-4 mb-4 ml-auto max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-3 p-8 pt-0 [&_.button-component]:w-full [&_.button-component>button]:mt-2 [&_.button-component>button]:w-full">
                            <h2 className="pt-4 text-[2.5rem]">{event.title}</h2>
                            {event.timeDescription && (
                                <div className="flex items-center gap-3 py-2 text-[1.15rem] font-bold text-dark-white uppercase">
                                    <img src={CalendarIcon} alt="Location Icon" />
                                    <p>{event.timeDescription}</p>
                                </div>
                            )}
                            {event.locationDescription && (
                                <div className="flex items-center gap-3 py-2 text-[1.15rem] font-bold text-dark-white uppercase">
                                    <img src={LocationIcon} alt="Location Icon" />
                                    <p>{event.locationDescription}</p>
                                </div>
                            )}
                            <GradientLine />
                            <Button type="internal" link={"/Events"} buttonText={"Events"} />
                        </div>
                    </div>
                ) : (
                    /** Empty State */
                    <div className="flex w-[45%] flex-col items-center border border-white bg-eerie-black text-white max-md:w-full">
                        <div className="flex w-full justify-center overflow-hidden bg-[#111] p-8">
                            <img src={placeholderImage} alt="TrickFire presentation event" />
                        </div>
                        <div className="flex w-full flex-col gap-3 p-8 pt-0 [&_.button-component]:w-full [&_.button-component>button]:mt-2 [&_.button-component>button]:w-full">
                            <h2 className="pt-4 text-[2.5rem]">No Upcoming Events</h2>
                            <p className="flex items-center gap-3 py-2 text-[1.15rem] font-bold text-dark-white uppercase">
                                Check back soon for upcoming events!
                            </p>
                            <GradientLine />
                            <Button type="internal" link={"/Events"} buttonText={"Events"} />
                        </div>
                    </div>
                )}
                <div className="flex w-[40%] flex-col items-center justify-center gap-4 text-white max-md:w-full">
                    <h2 className="text-[6rem]">Events</h2>
                    <GradientLine />
                    <p className="mt-2 text-[1.1rem] text-dark-white">
                        TrickFire's events and workshops are a great way to learn more about our
                        work and gain new skills.
                    </p>
                </div>
            </MaxWidthContainer>
        </div>
    );
};
