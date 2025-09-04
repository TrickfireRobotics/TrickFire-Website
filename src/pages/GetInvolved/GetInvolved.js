import './GetInvolved.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import { RepeatingTextBackground } from '../../components/RepeatingTextBackground/RepeatingTextBackground'
import contactBackground from './../../assets/RepeatingText/Contact.png'

export const GetInvolved = () => {
    return (
        <main className='get-involved'>
            <MaxWidthContainer>
                <TextImage
                    imageOrder="imageLeft"
                    subheader="Join TrickFire"
                    text="We are a student team competing in the University Rover Challenge. TrickFire Robotics draws a talented field of engineers, marketers, and scientists united by the exciting task of developing a rover that could one day assist astronauts on Mars. Our team emphasizes learning, development, collaboration, diverse participation, and community engagement. We encourage anyone considering joining our team to give it a chance. No previous experience is needed to join! New members are onboarded on a rolling basis."
                    showButton={true}
                    link="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0i7wGfH_Ef9MlM3y37_kRLpUMEVVSDJTTFFOU0RNOEhNVVYyWUI2TjdOTyQlQCN0PWcu"
                    buttonText="Join Us!"
                    imageSource="https://media.discordapp.net/attachments/598246036707999801/1291473213280358430/2401001A_029-5K.jpg?ex=68b9e028&is=68b88ea8&hm=b118ff817b52fef7a24d6dc51c8ca3c35668cc65a441e405ca93f24cc67bd408&=&width=1602&height=1068"
                    alternativeText="Four smiling students stand next to a rover at a crowded table excited to talk about their work."
                />

                <TextImage
                    imageOrder="imageRight"
                    subheader="Partner With Us"
                    text="TrickFire Robotics is made possible by the generous support of our sponsors and donors, who play a vital role in fostering the innovative work of the next generation of engineers. Sponsoring TrickFire Robotics not only empowers students to develop cutting-edge robots by preparing them to apply their skills in real-world applications, from space exploration to solving everyday challenges."
                    showButton={true}
                    link=""
                    buttonText="Sponsor Us!"
                    imageSource="https://www.trickfirerobotics.com/assets/images/photos/MentoringImage/MentoringImage-1920w.webp?width=1920"
                    alternativeText="Three people, all in dark tops, observing a robotic arm on a wooden table."
                />
            </MaxWidthContainer>
            <RepeatingTextBackground
                backgroundImage={contactBackground}
                link=''
                buttonText='Contact Us!'
                text='If you are interested in mentoring the team, having us demo or display our rover at an event, or have any other questions for TrickFire Robotics, please get in touch!'
            />
        </main>
    )
}