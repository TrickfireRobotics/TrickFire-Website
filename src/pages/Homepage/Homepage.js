import './Homepage.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'

export const Homepage = () => {
    return (
        <main className='homepage'>
            <MaxWidthContainer>
                <TextImage 
                    imageOrder="imageLeft"
                    subheader="Who Are We?" 
                    text="TrickFire is a student-led robotics team based in the University of Washington Bothell. Since TrickFire was founded in 2016 our goal has been enabling students to get real experience in engineering, marketing and leadership while having fun along the way." 
                    showButton={true}
                    link="" 
                    buttonText="About Us!" 
                    imageSource="https://www.trickfirerobotics.com/assets/images/photos/MarketingTeam/MarketingTeam-1920w.webp?width=1920"
                    alternativeText="Four students pose excitedly outside a building." 
                />

                <TextImage 
                    imageOrder="imageRight"
                    subheader="Join Us" 
                    text="TrickFire’s mission is to give students hands-on experiences in a variety of fields. Joining TrickFire is a great way to gain real experience in engineering, software, marketing, leadership and more. No previous experience is needed, and new members are onboarded on a rolling basis." 
                    showButton={true}
                    link="" 
                    buttonText="Join Us!" 
                    imageSource="https://cdn.discordapp.com/attachments/1258621803811700778/1378147114541908080/20250530_155953.jpg?ex=68bac3c4&is=68b97244&hm=29c9a4c72332957337b79fb514331a43340a2603fdb0ab62c9711cc7d2ce7117&"
                    alternativeText="Six students smile behind a table with a rover, stickers, candy, and business cards." 
                />
            </MaxWidthContainer>
        </main>
    )
}