import { TextImage } from "../components/TextImage";
import { MaxWidthContainer } from "../components/MaxWidthContainer";
import { ImageCarousel } from "../components/ImageCarousel";
import { OutlinedBox } from "../components/OutlinedBox";
import Rover2025 from "../assets/about-us/rover-2025.jpeg";
import RoverUnveiling2025 from "../assets/about-us/rover-unveiling-2025.jpeg";
import { OfficerSection } from "../components/OfficerSection";
import TeamPhoto2020 from "../assets/about-us/team-photo-2020.jpg";
import TeamPhoto2024 from "../assets/about-us/team-photo-2024.jpg";
import TeamPhoto2025 from "../assets/about-us/team-photo-2025.jpeg";
import { client } from "../assets/sanity-client";
import { GradientLine } from "../components/GradientLine";
import { PageSEO } from "../components/PageSEO";
import { useRef, useEffect, useState } from "react";
import type { OfficerDoc } from "../types/sanity";

const image_carousel_images = [
    {
        src: TeamPhoto2025,
        altText:
            "Three rows of students standing outside in front of a large W. Lush green plants to either side, the sky is blue with clouds.",
    },
    {
        src: TeamPhoto2024,
        altText:
            "Two rows of students standing outside in front of a large W. Lush green plants to either side, the sky is blue.",
    },
    {
        src: TeamPhoto2020,
        altText:
            "Students stand and sit in front of a large W. Some are in TrickFire Robotics shirts. The ground is cold and wet, the sky is gray.",
    },
];

export const AboutUs = () => {
    const [officers, setOfficers] = useState<OfficerDoc[]>([]);
    const current_year = new Date().getFullYear();
    const founding_year = 2016;
    const years = [];

    for (let year = founding_year; year <= current_year; year++) {
        years.push(year);
    }

    const yearSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        client
            .fetch<OfficerDoc[]>(`*[_type == "officers"]`)
            .then((data) => setOfficers(data))
            .catch((err: unknown) => console.log(err));
    }, []);

    useEffect(() => {
        const yearSection = yearSectionRef.current;
        if (!yearSection) {
            return;
        }

        let scrollDirection = 1;
        const scrollSpeed = 1;

        const horizontalScrollBounce = () => {
            if (scrollDirection === 1) {
                yearSection.scrollLeft += scrollSpeed;
                if (yearSection.scrollLeft >= yearSection.scrollWidth - yearSection.clientWidth) {
                    scrollDirection = -1;
                }
            } else {
                yearSection.scrollLeft -= scrollSpeed;
                if (yearSection.scrollLeft <= 0) {
                    scrollDirection = 1;
                }
            }
        };

        const intervalId = setInterval(horizontalScrollBounce, 45);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <PageSEO
                title="About Us"
                description="Learn about TrickFire Robotics, our mission, team members, and officers. Founded in 2016, we're committed to developing future engineers and innovators."
                keywords="about, team, officers, mission, TrickFire"
                url="/about-us"
            />
            <main className="bg-eerie-black">
                <ImageCarousel
                    title="Our Story"
                    images={image_carousel_images}
                    numImages={Object.keys(image_carousel_images).length}
                    overlay="TrickFire Robotics is a student team at UWB currently competing in the University Rover Challenge by the Mars Society. We previously competed in NASA Lunabotics, a lunar mining competition. Over the years, TrickFire has built a strong student and alumni community."
                />

                <div className="w-full bg-black">
                    <MaxWidthContainer>
                        <div
                            className="mx-auto flex w-3/4 overflow-x-auto pb-4 whitespace-nowrap [&::-webkit-scrollbar]:hidden max-md:mx-12 max-md:mt-[-1rem] max-md:w-auto max-md:pt-4 max-md:text-center"
                            ref={yearSectionRef}
                        >
                            {years.map((item, index) => (
                                <div
                                    className="mx-6 inline text-[3rem] text-dark-white italic last:text-white last:not-italic max-md:mr-4 [&_.gradient-underline]:hidden last:[&_.gradient-underline]:block"
                                    key={index}
                                >
                                    <h1 className="text-[6rem] max-md:text-[3rem]">{item}</h1>
                                    <div className="gradient-underline">
                                        <GradientLine />
                                        <GradientLine />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </MaxWidthContainer>
                </div>

                <MaxWidthContainer>
                    <TextImage
                        imageOrder="image-left"
                        subheader="About Us"
                        text={[
                            "TrickFire Robotics is a large-scale aerospace robotics team at the University of Washington Bothell that competes in the  ",
                            <a
                                key="urc-link"
                                href="https://urc.marssociety.org"
                                rel="noreferrer"
                                target="_blank"
                            >
                                University Rover Challenge
                            </a>,
                            ". The URC is an international competition challenging students to design and build rovers relevant to future Mars exploration. Teams compete in four missions related to autonomous navigation, life detection, equipment servicing, and extreme delivery. Since 2016, TrickFire Robotics has attracted a diverse, interdisciplinary group of students and provided opportunities for professional and technical development.",
                        ]}
                        showButton={false}
                        imageSource={RoverUnveiling2025}
                        alternativeText="A large student team standing behind a rover with multicolored wheels."
                    />

                    <TextImage
                        imageOrder="image-right"
                        subheader="Our Disciplines"
                        text={[
                            "TrickFire Robotics is composed of students from a variety of majors with business and technical interests.   ",
                            <div key="disciplines-list">
                                <br />
                                <ul>
                                    <li>Software Engineering</li>
                                    <li>Mechanical Engineering</li>
                                    <li>Electrical Engineering</li>
                                    <li>Science</li>
                                    <li>Marketing</li>
                                    <li>Finance</li>
                                </ul>
                            </div>,
                        ]}
                        showButton={false}
                        imageSource={Rover2025}
                        alternativeText="A rover with multicolored wheels on a sidewalk in front of plants and a brick wall. "
                    />
                </MaxWidthContainer>

                <OutlinedBox
                    backgroundText="Join"
                    link="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0i7wGfH_Ef9MlM3y37_kRLpUMEVVSDJTTFFOU0RNOEhNVVYyWUI2TjdOTyQlQCN0PWcu"
                    buttonText="Join Us!"
                    buttonType="external"
                    text="Our team consists of smaller specialized subteams that all contribute to the rover at large. Members can join multiple teams and work on several different projects covering a variety of disciplines. No previous experience is needed to join! New members are onboarded on a rolling basis."
                />
                <MaxWidthContainer>
                    <OfficerSection allOfficers={officers} />
                </MaxWidthContainer>
            </main>
        </>
    );
};
