import './Events.scss'
import {GradientLine} from '../../components/GradientLine/GradientLine'
import {MaxWidthContainer} from '../../components/MaxWidthContainer/MaxWidthContainer'
import { Event } from '../../components/Event/Event'
import { useState, useEffect } from 'react'
import { client, urlFor } from '../../assets/SanityClient'


export const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "instant" });

      client.fetch(`*[_type == "events"] | order(formattedDate asc)`)
        .then(data => setEvents(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <main className='events'>
            <MaxWidthContainer>
                <section className='page-head'>
                    <h2 className='events-header'>Events</h2>
                    <GradientLine/>
                    <p className='page-head-text'>TrickFire’s events and workshops are a great way to learn more about our work and gain new skills.</p>
                </section>
            </MaxWidthContainer>
            <section className='events-section'>
                <MaxWidthContainer>
                    <div className='events-list'>
                        {events?.length !== 0 ? (events.map(event => {
                            return <Event
                                     key={event?.title} 
                                     img={urlFor(event.img).auto('format').url()} 
                                     altText={event?.altText} 
                                     title={event?.title} 
                                     timeDescription={event?.timeDescription}
                                     description={event?.description}
                                     date={event?.date}
                                     links={event?.links}
                                   />
                        })) : (
                            <div className='empty-state-container'>
                                <h2 className='empty-state-text'>
                                    No upcoming events right now — check back soon!
                                </h2>
                            </div>
                        )}
                    </div>
                </MaxWidthContainer>
            </section>
        </main>
    )
}