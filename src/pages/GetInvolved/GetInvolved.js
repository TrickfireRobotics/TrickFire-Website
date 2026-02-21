import './GetInvolved.scss'
import { TextImage } from './../../components/TextImage/TextImage'
import { MaxWidthContainer } from './../../components/MaxWidthContainer/MaxWidthContainer'
import { OutlinedBox } from '../../components/OutlinedBox/OutlinedBox'
import ClubFair from '../../assets/GetInvolved/clubFair.jpeg'
import LabWithArm from '../../assets/GetInvolved/labWithArm.webp'

const disciplines = ['Software Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Science', 'Marketing', 'Finance']

export const GetInvolved = () => {
    return (
        <main className='get-involved'>
            <meta name="description" content="Get involved with our team! TrickFire Robotics draws a talented field of students from a variety of majors. We encourage anyone considering joining to give it a chance, and accept new members on a rolling basis." />

            <MaxWidthContainer>
                <TextImage
                    imageOrder="image-left"
                    subheader="Join TrickFire"
                    text={["We are a student team competing in the ", <a href="https://urc.marssociety.org" rel="noreferrer" target="_blank">University Rover Challenge</a>, ". TrickFire Robotics draws a talented field of engineers, marketers, and scientists united by the exciting task of developing a rover that could one day assist astronauts on Mars. Our team emphasizes learning, development, collaboration, diverse participation, and community engagement. We encourage anyone considering joining our team to give it a chance. No previous experience is needed to join! New members are onboarded on a rolling basis."]}
                    showButton={true}
                    buttonType='external'
                    link="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0i7wGfH_Ef9MlM3y37_kRLpUMEVVSDJTTFFOU0RNOEhNVVYyWUI2TjdOTyQlQCN0PWcu"
                    buttonText="Join Us!"
                    imageSource={ClubFair}
                    alternativeText="Four smiling students stand next to a rover at a crowded table excited to talk about their work."
                />
            </MaxWidthContainer>

            <div className="opportunities-section">
                <MaxWidthContainer>
                    <h1 className="large-italic-center">Opportunities In...</h1>
                    <div className="discipline-list">
                        {disciplines.map((item, index) =>
                            <div className="discipline" key={index}>
                                <h1>{item}</h1>
                            </div>
                        )}
                    </div>
                </MaxWidthContainer>
            </div>

            <MaxWidthContainer>
                <TextImage
                    imageOrder="image-right"
                    subheader="Partner With Us"
                    text="TrickFire Robotics is made possible by the generous support of our sponsors and donors, who play a vital role in fostering the innovative work of the next generation of engineers. Sponsoring TrickFire Robotics not only empowers students to develop cutting-edge robots by preparing them to apply their skills in real-world applications, from space exploration to solving everyday challenges."
                    showButton={true}
                    buttonType='external'
                    link="mailto:tfrbtcs@uw.edu"
                    buttonText="Sponsor Us!"
                    imageSource={LabWithArm}
                    alternativeText="Three people, all in dark tops, observing a robotic arm on a wooden table."
                />
            </MaxWidthContainer>

            <OutlinedBox
                backgroundText='CONTACT'
                link='mailto:tfrbtcs@uw.edu'
                buttonText='Contact Us!'
                buttonType='external'
                text='If you are interested in mentoring the team, having us demo or display our rover at an event, or have any other questions for TrickFire Robotics, please get in touch!'
            />
        </main>
    )
}