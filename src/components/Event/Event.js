import './Event.scss'
import { PortableText } from '@portabletext/react'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'

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
export const Event = ({img, altText, title, timeDescription, description, links }) => {

    return (
        <div className='event'>
            <div className='event-image-column'>'
                <div className='event-image-container'>
                    <BoxShadowImage className="event-image" imageSource={img} altText={altText}/>
                </div>
            </div>
            <div className='event-text-column'>
                <h2 className='event-title'>{title}</h2>
                <p className='event-time'>{timeDescription}</p>
                <GradientLine/>
                <div className='event-description'><PortableText value = {description}/></div>
                <div className='event-link-container'>
                    {links?.map(link => {
                        return <Button 
                                 type="external" 
                                 link={link.href} 
                                 buttonText={link.name}
                               />
                    })}
                </div>
            </div>
        </div>
    )
}