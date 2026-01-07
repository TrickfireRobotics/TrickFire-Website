import './Hero.scss'
import roverOnRock from '../../assets/Homepage/roverOnRock.png'
import watermelonDragon from '../../assets/Homepage/WatermelonDragon.png'
import { Button } from '../Button/Button.js'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer.js'

/**
 * @returns Hero component for the Homepage.
 */
export const Hero = () => {
    return (
        <div className='hero'>
<<<<<<< HEAD
            <img src={roverOnRock} className='background-image' alt="Rover background"/>

            <MaxWidthContainer>
                <img src={watermelonDragon} className='watermelonDragon' alt="Watermelon dragon mascot"/>
=======
            <img src={roverOnRock} alt="Viator rover" className='background-image'/>

            <MaxWidthContainer>
                <img src={watermelonDragon} alt="Watermelon dragon mascot" className='watermelonDragon'/>
>>>>>>> f903ae583ab2bb1b5eaa766b58a8d6831b042f69
                <div className='text'>
                    <h1 className='title'>TrickFire Robotics</h1>
                    <p className='subtitle'>Developing future engineers, developers, and marketers in the world of competitive robotics</p>
                </div>
                <Button type="internal" link="get-involved" buttonText="Get Involved" className='button'/>
            </MaxWidthContainer>
        </div>
    )
}