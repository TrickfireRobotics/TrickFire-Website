import { GradientLine } from '../GradientLine/GradientLine'
import placeholderImage from '../../assets/Homepage/eventPlaceholder.png'
import {MaxWidthContainer} from '../MaxWidthContainer/MaxWidthContainer'
import { urlFor } from '../../assets/SanityClient'
import './HomeEvent.scss'
import { client } from '../../assets/SanityClient'
import { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'

/**
 * @component
 * 
 * Component for the Homepage that fetches and displays information on the most recent event
 * @returns {JSX.Element}
 */
export const HomeEvent = () => {
    const [event, setEvent] = useState(null);
    
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant" });

        client.fetch(`*[_type == "events"] | order(formattedDate asc)[0]`)
        .then(data => setEvent(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='home-event'>
            <MaxWidthContainer>
                <div className='content-container'>
                    {event ? (
                        /** Event Display */
                        <div className='event-container'>
                            <div className='event-image-wrapper'>
                                <BoxShadowImage
                                    className='event-image' 
                                    imageSource={event?.img ? urlFor(event.img).auto('format').url() : placeholderImage} 
                                    altText={event.img?.alt || event.altDescription || "Event image"}
                                />
                            </div>
                            <div className='event-info-container'>
                                <h2 className='event-title'>{event.title}</h2>
                                <p className='event-time'>{event.timeDescription}</p>
                                <GradientLine/>
                                <Button 
                                    type="internal"
                                    link={"/Events"} 
                                    buttonText={"Events"}
                                />
                            </div>
                        </div>
                    ) : (
                        /** Empty State */
                        <div className='event-container'>
                            <div className='event-image-wrapper'>
                                <img
                                    className='event-image'
                                    src={placeholderImage}
                                    alt='TrickFire presentation event'
                                />
                            </div>
                            <div className='event-info-container'>
                                <h2 className='event-title'>No Upcoming Events</h2>
                                <p className='event-time'>Check back soon for upcoming events!</p>
                                <GradientLine/>
                                <Button 
                                    type="internal"
                                    link={"/Events"} 
                                    buttonText={"Events"}
                                />
                            </div>
                        </div>
                    )}
                    <div className='text-container'>
                        <h2 className='section-title'>Events</h2>
                        <GradientLine/>
                        <p className='section-text'>TrickFire's events and workshops are a great way to learn more about our work and gain new skills.</p>
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}