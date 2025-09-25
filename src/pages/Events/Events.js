import './Events.scss'
import {GradientLine} from '../../components/GradientLine/GradientLine'
import {MaxWidthContainer} from '../../components/MaxWidthContainer/MaxWidthContainer'
import { Event } from '../../components/Event/Event'
import ExampleImage from '../../assets/AboutUs/teamPhoto2024.jpg'

export const Events = () => {

    const events = [
        {
            img: ExampleImage,
            altDescription: 'Example',
            title: 'Event',
            timeDescription: 'DD MM YYYY - HH MM',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: new Date(),
            links: [
                {
                    link: 'www.google.com',
                    buttonText: 'Text'
                }
            ]
        },
        {
            img: ExampleImage,
            altDescription: 'Example',
            title: 'Event',
            timeDescription: 'DD MM YYYY - HH MM',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: new Date(),
            links: [
                {
                    link: 'www.google.com',
                    buttonText: 'Text'
                }
            ]
        }
    ]

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
                        {events.map(event => {
                            return <Event 
                                     img={event.img} 
                                     altDescription={event.altDescription} 
                                     title={event.title} 
                                     timeDescription={event.timeDescription}
                                     description={event.description}
                                     date={event.date}
                                     links={event.links}
                                   />
                        })}
                    </div>
                </MaxWidthContainer>
            </section>
        </main>
    )
}