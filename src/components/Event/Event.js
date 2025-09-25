import './Event.scss'
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
                <h3 className='event-time'>{timeDescription}</h3>
                <GradientLine/>
                <p className='event-description'>{description}</p>
                <div className='event-link-container'>
                    {links.map(link => {
                        return <Button 
                                 isSubpageLink={true} 
                                 link={link.link} 
                                 buttonText={link.buttonText}
                               />
                    })}
                </div>
            </div>
        </div>
    )
}