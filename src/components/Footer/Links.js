// @ts-check
import './Footer.scss'
import LinkedInLogo from '../../assets/Footer/LinkedInLogo.png'
import InstagramLogo from '../../assets/Footer/InstagramLogo.png'
import YoutubeLogo from '../../assets/Footer/YoutubeLogo.png'
import EmailLogo from '../../assets/Footer/EmailLogo.png'

/**
 * Data object for a social link in the footer.
 * @typedef {Object} SocialLink
 * @property {Object} img - Logo to display in the footer. Must be an imported image module
 * @property {string} url - Full link to resource (e.g. 'https://www.linkedin.com/company/trickfire-robotics/')
 * @property {string} name - Logo description for accessibility  
 */

/** 
 * @type {SocialLink[]} 
 * @see {@link SocialLink}
 */
export const links = [
    {
        img: EmailLogo,
        url: 'mailto:tfrbtcs@uw.edu',
        name: 'Email',
    },
    {
        img: LinkedInLogo,
        url: 'https://www.linkedin.com/company/trickfire-robotics/',
        name: 'LinkedIn'
    },
    {
        img: InstagramLogo,
        url: 'https://www.instagram.com/trickfirerobotics/?hl=en',
        name: 'Instagram',
    },
    {
        img: YoutubeLogo,
        url: 'https://www.youtube.com/@trickfirerobotics5781',
        name: 'Youtube',
    },
];