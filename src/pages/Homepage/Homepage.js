import './Homepage.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import March2025Outreach from '../../assets/Homepage/march2025Outreach.jpeg'
import MarketingTeam from '../../assets/Homepage/marketingTeam.png'

export const Homepage = () => {
    return (
        <main className='homepage'>
            <MaxWidthContainer>
                <TextImage 
                    imageOrder="image-right"
                    subheader="Who Are We?" 
                    text="TrickFire is a student-led robotics team based in the University of Washington Bothell. Since TrickFire was founded in 2016 our goal has been enabling students to get real experience in engineering, marketing, and leadership while having fun along the way." 
                    showButton={true}
                    isSubpageLink={true}
                    isLink={false}
                    link="/about-us" 
                    buttonText="About Us!" 
                    imageSource={MarketingTeam}
                    alternativeText="Four students pose excitedly outside a building." 
                />

                <TextImage 
                    imageOrder="image-right"
                    subheader="Join Us" 
                    text={["TrickFire’s mission is to give students hands-on experiences in a variety of fields. Joining TrickFire is a great way to gain real experience in engineering, software, marketing, leadership and more.", <br></br>, <br></br>,  "No previous experience is needed, and new members are onboarded on a rolling basis."]} 
                    showButton={true}
                    isSubpageLink={true}
                    isLink={false}
                    link="/get-involved" 
                    buttonText="Join Us!" 
                    imageSource={March2025Outreach}
                    alternativeText="Six students smile behind a table with a rover, stickers, candy, and business cards." 
                />
            </MaxWidthContainer>
        </main>
    )
}