import './AboutUs.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import { OutlinedBox } from '../../components/OutlinedBox/OutlinedBox'
import Rover2025 from '../../assets/AboutUs/rover2025.jpeg'
import RoverUnveiling2025 from '../../assets/AboutUs/roverUnveiling2025.jpeg'

export const AboutUs = () => {
    return (
        <main className='about-us'>
            <MaxWidthContainer>
                <TextImage
                    imageOrder="image-left"
                    subheader="About Us"
                    text={["TrickFire Robotics is a large-scale aerospace robotics team at the University of Washington Bothell that competes in the  ", <a href="https://urc.marssociety.org" rel="noreferrer" target="_blank">University Rover Challenge</a>, ". The URC is an international competition challenging students to design and build rovers relevant to future Mars exploration. Teams compete in four missions related to autonomous navigation, life detection, equipment servicing, and extreme delivery. Since 2016, TrickFire Robotics has attracted a diverse, interdisciplinary group of students and provided opportunities for professional and technical development."]}
                    showButton={false}
                    imageSource={RoverUnveiling2025}
                    alternativeText="A large student team standing behind a rover with multicolored wheels."
                />

                <TextImage
                    imageOrder="image-right"
                    subheader="Our Disciplines"
                    text={["TrickFire Robotics is composed of students from a variety of majors with business and technical interests.   ", <ul><br></br><li>Software Engineering</li><li>Mechanical Engineering</li><li>Electrical Engineering</li><li>Science</li><li>Marketing</li><li>Finance</li></ul>]}
                    showButton={false}
                    imageSource={Rover2025}
                    alternativeText="A rover with multicolored wheels on a sidewalk in front of plants and a brick wall. "
                />
            </MaxWidthContainer>
            <OutlinedBox
                backgroundText='Join'
                link=''
                buttonText='Join Us!'
                isSubpageLink={false}
                isLink={true}
                text='Our team consists of smaller specialized subteams that all contribute to the rover at large. Members can join multiple teams and work on several different projects covering a variety of disciplines. No previous experience is needed to join! New members are onboarded on a rolling basis.'
            />
        </main>
    )
}