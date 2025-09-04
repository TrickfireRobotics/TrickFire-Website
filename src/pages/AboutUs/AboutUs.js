import './AboutUs.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import { RepeatingTextBackground } from '../../components/RepeatingTextBackground/RepeatingTextBackground'
import joinBackground from './../../assets/RepeatingText/Join.png'

export const AboutUs = () => {
    return (
        <main className='about-us'>
            <MaxWidthContainer>
                <TextImage
                    imageOrder="imageLeft"
                    subheader="About Us"
                    text="TrickFire Robotics is a large-scale aerospace robotics team at the University of Washington Bothell that competes in the University Rover Challenge. The URC is an international competition challenging students to design and build rovers relevant to future Mars exploration. Teams compete in four missions related to autonomous navigation, life detection, equipment servicing, and extreme delivery. Since 2016, TrickFire Robotics has attracted a diverse, interdisciplinary group of students and provided opportunities for professional and technical development."
                    showButton={false}
                    imageSource="https://cdn.discordapp.com/attachments/1258621803811700778/1378147114541908080/20250530_155953.jpg?ex=68bac3c4&is=68b97244&hm=29c9a4c72332957337b79fb514331a43340a2603fdb0ab62c9711cc7d2ce7117&"
                    alternativeText="A large student team standing behind a rover with multicolored wheels."
                />

                <TextImage
                    imageOrder="imageRight"
                    subheader="Our Disciplines"
                    text="TrickFire Robotics is composed of students from a variety of majors with business and technical interests. ● Software Engineering ● Mechanical Engineering ● Electrical Engineering ● Science ● Marketing ● Finance"
                    showButton={false}
                    imageSource="https://cdn.discordapp.com/attachments/1258621803811700778/1378222197482455151/IMG_1439.jpeg?ex=68bb09b2&is=68b9b832&hm=69d13230c8b432a15415c8670862552357235a4699651ce3256b2fef9b818cd8"
                    alternativeText="A rover with multicolored wheels on a sidewalk in front of plants and a brick wall. "
                />
            </MaxWidthContainer>
            <RepeatingTextBackground
                backgroundImage={joinBackground}
                link=''
                buttonText='Join Us!'
                text='Our team consists of smaller specialized subteams that all contribute to the rover at large. Members can join multiple teams and work on several different projects covering a variety of disciplines. No previous experience is needed to join! New members are onboarded on a rolling basis.'
            />
        </main>
    )
}