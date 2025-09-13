import './AboutUs.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import { ImageCarousel } from './../../components/ImageCarousel/ImageCarousel'
import { OutlinedBox } from '../../components/OutlinedBox/OutlinedBox'
import Rover2025 from '../../assets/AboutUs/rover2025.jpeg'
import RoverUnveiling2025 from '../../assets/AboutUs/roverUnveiling2025.jpeg'
import TeamPhoto2020 from '../../assets/AboutUs/teamPhoto2020.jpg'
import TeamPhoto2024 from '../../assets/AboutUs/teamPhoto2024.jpg'
import TeamPhoto2025 from '../../assets/AboutUs/teamPhoto2025.jpeg'

const image_carousel_images = [
    { src: TeamPhoto2025, 
      alt: 'Three rows of students standing outside in front of a large W. Lush green plants to either side, the sky is blue with clouds.'},
    { src: TeamPhoto2024, 
      alt: 'Two rows of students standing outside in front of a large W. Lush green plants to either side, the sky is blue.'},
    { src: TeamPhoto2020, 
      alt: 'Students stand and sit in front of a large W. Some are in TrickFire Robotics shirts. The ground is cold and wet, the sky is gray.'}
];

const image_carousel_images_temp = [
    { src: TeamPhoto2025, 
      alt: 'Three rows of students standing outside in front of a large W. Lush green plants to either side, the sky is blue with clouds.'}
];

export const AboutUs = () => {
    return (
        <main className='about-us'>
            <ImageCarousel 
                images = {image_carousel_images_temp}
            />
            
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
                link='https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0i7wGfH_Ef9MlM3y37_kRLpUMEVVSDJTTFFOU0RNOEhNVVYyWUI2TjdOTyQlQCN0PWcu'
                buttonText='Join Us!'
                isSubpageLink={false}
                isLink={true}
                text='Our team consists of smaller specialized subteams that all contribute to the rover at large. Members can join multiple teams and work on several different projects covering a variety of disciplines. No previous experience is needed to join! New members are onboarded on a rolling basis.'
            />
        </main>
    )
}