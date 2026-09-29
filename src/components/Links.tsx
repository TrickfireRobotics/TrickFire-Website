import LinkedInLogo from "../assets/footer/linkedin-logo.png";
import InstagramLogo from "../assets/footer/instagram-logo.png";
import YoutubeLogo from "../assets/footer/youtube-logo.png";
import EmailLogo from "../assets/footer/email-logo.png";

interface SocialLink {
    /** Logo to display in the footer. Must be an imported image module */
    img: string;
    /** Full link to resource (e.g. 'https://www.linkedin.com/company/trickfire-robotics/') */
    url: string;
    /** Logo description for accessibility */
    name: string;
}

export const links: SocialLink[] = [
    {
        img: EmailLogo,
        url: "mailto:tfrbtcs@uw.edu",
        name: "Email",
    },
    {
        img: LinkedInLogo,
        url: "https://www.linkedin.com/company/trickfire-robotics/",
        name: "LinkedIn",
    },
    {
        img: InstagramLogo,
        url: "https://www.instagram.com/trickfirerobotics/?hl=en",
        name: "Instagram",
    },
    {
        img: YoutubeLogo,
        url: "https://www.youtube.com/@trickfirerobotics5781",
        name: "Youtube",
    },
];
