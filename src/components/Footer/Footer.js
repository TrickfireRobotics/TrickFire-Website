import './Footer.scss'
import { GradientLine } from '../GradientLine/GradientLine';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { links } from './Links'

const date = new Date();

/** 
 * @component
 * 
 * Footer component that renders the social media links and copyright information.
 * @returns {JSX.Element}
*/
export const Footer = () => {
    return (
        <footer className='footer' role="contentinfo">
            <GradientLine/>
            <MaxWidthContainer>
                <nav aria-label='Social media links' className='social-nav'>
                    <ul className='social-list'>
                        {links.map(link => (
                            <li className="social-list-item" key={link.url}>
                                <a 
                                className='social-link'
                                href={link.url}
                                aria-label={"Go to " + link.name}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={link.img} alt={link.name + " logo"}/>
                                </a>
                            </li>
                            )
                        )}
                    </ul>
                </nav>
                
                <p className='copyright'>
                    Copyright © {date.getFullYear()} TrickFire Robotics.  
                    <br />
                    All rights reserved.
                    <br /> 
                    Bothell, WA.
                </p>
            </MaxWidthContainer>
        </footer>
    )
}