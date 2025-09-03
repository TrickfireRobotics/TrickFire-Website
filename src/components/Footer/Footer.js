import './Footer.scss'
import { links } from './Links'

const date = new Date();

export const Footer = () => {
    return (
        <footer className='footer' role="contentinfo">
            <div className='gradient'></div>
            <div className='max-width-container'>
                <nav aria-label='Social media links' className='social-nav'>
                    <ul className='social-list'>
                        {links.map(link => (
                            <li key={link.url}>
                                <a 
                                className='social-link'
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={link.img} alt={link.alt}/>
                                </a>
                            </li>
                            )
                        )}
                    </ul>
                </nav>
                
                <p className='copyright'>Copyright © {date.getFullYear()} TrickFire Robotics. All rights reserved. Bothell, WA.</p>
            </div>
        </footer>
    )
}