import './Event.scss'
import { PortableText } from '@portabletext/react'
import { BoxShadowImage } from '../BoxShadowImage/BoxShadowImage'
import { GradientLine } from '../GradientLine/GradientLine'
import { Button } from '../Button/Button'

export const Event = ({img, altDescription, title, timeDescription, description, date, links }) => {

    return (
        <div className='event'>
            <div className='event-image-column'>'
                <div className='event-image-container'>
                    <BoxShadowImage className="event-image" imageSource={img} altDescription={altDescription}/>
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
                                 isLink={true} 
                                 link={link.href} 
                                 buttonText={link.name}
                               />
                    })}
                </div>
            </div>
        </div>
    )
}