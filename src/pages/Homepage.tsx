import { TextImage } from "../components/TextImage";
import { MaxWidthContainer } from "../components/MaxWidthContainer";
import March2025Outreach from "../assets/homepage/march-2025-outreach.jpeg";
import MarketingTeam from "../assets/homepage/marketing-team.png";
import { Hero } from "../components/Hero";
import { HomeEvent } from "../components/HomeEvent";
import { PageSEO } from "../components/PageSEO";

export const Homepage = () => {
    const seoData = {
        title: "TrickFire Robotics",
        description:
            "TrickFire Robotics is a student-led team at University of Washington Bothell competing in the University Rover Challenge. Explore opportunities in engineering, software, and marketing.",
        keywords: "robotics, engineering, students, University of Washington Bothell, rover, mars",
    };
    return (
        <>
            <PageSEO {...seoData} />
            <main className="bg-eerie-black">
                <Hero />
                <MaxWidthContainer>
                    <TextImage
                        imageOrder="image-right"
                        subheader="Who Are We?"
                        text="TrickFire is a student-led robotics team based in the University of Washington Bothell. Since TrickFire was founded in 2016 our goal has been enabling students to get real experience in engineering, marketing, and leadership while having fun along the way."
                        showButton={true}
                        buttonType="internal"
                        link="/about-us"
                        buttonText="About Us!"
                        imageSource={MarketingTeam}
                        alternativeText="Four students pose excitedly outside a building."
                    />
                </MaxWidthContainer>
                <HomeEvent />
                <MaxWidthContainer>
                    <TextImage
                        imageOrder="image-right"
                        subheader="Join Us"
                        text={[
                            "TrickFire’s mission is to give students hands-on experiences in a variety of fields. Joining TrickFire is a great way to gain real experience in engineering, software, marketing, leadership and more.",
                            <br></br>,
                            <br></br>,
                            "No previous experience is needed, and new members are onboarded on a rolling basis.",
                        ]}
                        showButton={true}
                        buttonType="internal"
                        link="/get-involved"
                        buttonText="Join Us!"
                        imageSource={March2025Outreach}
                        alternativeText="Six students smile behind a table with a rover, stickers, candy, and business cards."
                    />
                </MaxWidthContainer>
            </main>
        </>
    );
};
