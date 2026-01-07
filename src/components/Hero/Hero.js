import './Hero.scss'
import roverOnRock from '../../assets/Homepage/roverOnRock.png'
import watermelonDragon from '../../assets/Homepage/WatermelonDragon.png'
import { Button } from '../Button/Button.js'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer.js'

/**
 * Hero component for the Homepage.
 */
export const Hero = () => {
    return (
        <div className='hero'>
            <img src={roverOnRock} className='background-image' alt="Rover background"/>

            <MaxWidthContainer>
                <img src={watermelonDragon} className='watermelonDragon' alt="Watermelon dragon mascot"/>
                <div className='text'>
                    <h1 className='title'>TrickFire Robotics</h1>
                    <p className='subtitle'>Developing future engineers, developers, and marketers in the world of competitive robotics</p>
                </div>
                <Button isSubpageLink={true} link="get-involved" isLink={false} buttonText="Get Involved" className='button'/>
            </MaxWidthContainer>
        </div>
    )
}