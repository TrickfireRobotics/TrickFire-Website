import { GradientLine } from "../components/GradientLine";
import { MaxWidthContainer } from "../components/MaxWidthContainer";
import { Event } from "../components/Event";
import { PageSEO } from "../components/PageSEO";
import { useState, useEffect } from "react";
import { client, urlFor } from "../assets/sanity-client";
import eventsBackgroundTile from "../assets/events/events-background-tile.png";
import type { EventDoc } from "../types/sanity";

export const Events = () => {
    const seoData = {
        title: "Events",
        description:
            "Explore TrickFire Robotics' upcoming events and workshops. Learn more about our work and gain new skills in robotics and engineering.",
        keywords: "events, workshops, robotics, learning",
        url: "/events",
    };
    const [events, setEvents] = useState<EventDoc[]>([]);

    useEffect(() => {
        client
            .fetch<EventDoc[]>(`*[_type == "events"] | order(formattedDate asc)`)
            .then((data) => setEvents(data))
            .catch((err: unknown) => console.log(err));
    }, []);

    return (
        <>
            <PageSEO {...seoData} />
            <main className="bg-eerie-black">
                <MaxWidthContainer>
                    <section className="p-[5vw]">
                        <h2 className="text-[3rem] leading-[1.5] text-white">Events</h2>
                        <GradientLine />
                        <p className="pt-8 text-[1.15rem] text-dark-white">
                            TrickFire's events and workshops are a great way to learn more about our
                            work and gain new skills.
                        </p>
                    </section>
                </MaxWidthContainer>
                <section
                    className="border-t border-white bg-repeat"
                    style={{
                        backgroundImage: `url(${eventsBackgroundTile})`,
                        backgroundPosition: "-50%",
                    }}
                >
                    <MaxWidthContainer>
                        <div className="flex w-full flex-col gap-12 p-16 max-md:mx-auto max-md:w-[85%] max-md:px-0 max-md:py-12">
                            {events.length !== 0 ? (
                                events.map((event) => {
                                    return (
                                        <Event
                                            key={event.title}
                                            img={urlFor(event.img).auto("format").url()}
                                            altText={event.altText}
                                            title={event.title}
                                            timeDescription={event.timeDescription}
                                            locationDescription={event.locationDescription}
                                            description={event.description}
                                            links={event.links}
                                        />
                                    );
                                })
                            ) : (
                                <div className="flex items-center justify-center border border-white bg-eerie-black p-16">
                                    <h2 className="text-center text-[3rem] text-white">
                                        No upcoming events right now — check back soon!
                                    </h2>
                                </div>
                            )}
                        </div>
                    </MaxWidthContainer>
                </section>
            </main>
        </>
    );
};
