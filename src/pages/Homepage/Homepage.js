import './Homepage.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'

export const Homepage = () => {
    return (
        <main className='homepage'>
            <MaxWidthContainer>
                <TextImage 
                    imageOrder="imageRight"
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
                    imageSource="https://cdn.discordapp.com/attachments/541757191854751754/1375150190654394530/IMG_4570.jpeg?ex=68bb116a&is=68b9bfea&hm=6be72b6662b5fe0d4d95c508f6a1f644e5e6ee86df5364111ea093260f468866"
                    alternativeText="Six students smile behind a table with a rover, stickers, candy, and business cards." 
                />
            </MaxWidthContainer>
        </main>
    )
}