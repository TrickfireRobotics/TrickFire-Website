import './Navbar.scss';

import TrickFireLogo from '../../assets/Navbar/TrickFireLogo.png';
import Menu from '../../assets/Navbar/Menu.png';
import Cross from '../../assets/Navbar/Cross.png';

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';

/**
 * Navbar component that renders subpage navigation links.
 * @component
 */
export const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const mobileWidthBreakpoint = 768;

    /**
     * Sets up a window resize listener to continuously update the viewportWidth state with the current size of the viewport.
     * It also clears the mobile navigation menu when the viewportWidth becomes greater than the mobileWidthBreakpoint.
     */
    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth)
            
            if (window.innerWidth > mobileWidthBreakpoint) {
                setIsNavActive(false)
            }
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className='navbar'>
            <MaxWidthContainer>
                <div className='navbar-row'>
                    {/* TrickFire Logo */}
                    <Link 
                     className="trickfire-logo-link" 
                     onClick={() => setIsNavActive(false)}
                     to='/'
                     aria-label='Go to TrickFire Robotics homepage'
                    >
                        <img 
                         src={TrickFireLogo} 
                         className='trickfire-logo'
                         alt='TrickFire Robotics logo'
                        />
                    </Link>
                    { viewportWidth > mobileWidthBreakpoint ? (
                        /* Desktop Subpage Navigation Menu */
                        <nav className='subpage-nav' aria-label='Subpage Navigation'>
                            <ul className='subpage-list'>
                                <li>
                                    <NavLink 
                                     className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                                     to='/about-us'
                                     aria-label='Go to About Us page'
                                    >
                                        <span>About us</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                     className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                                     to='/get-involved'
                                     aria-label='Go to Get Involved page'
                                    >
                                        <span>Get Involved</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                     className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'} 
                                     to='/events'
                                     aria-label='Go to Events page'
                                    >
                                        <span>Events</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    ) : (
                        <button 
                         className='mobile-menu-button'
                         onClick={() => setIsNavActive(prev => !prev)}
                         aria-label='Toggle navigation menu'
                         aria-expanded={isNavActive}
                         aria-controls='mobile-subpage-nav' 
                        >
                            <img src={isNavActive ? Cross : Menu} alt={isNavActive ? 'Close Menu Icon' : 'Menu Icon'}/>
                        </button>
                    )}
                </div>
                {isNavActive && (
                    /* Mobile Navigation Menu */
                    <nav className='mobile-subpage-nav' aria-label='Navigation Menu'>
                        <ul className='mobile-subpage-list'>
                            <li>
                                <NavLink 
                                 className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                                 onClick={() => setIsNavActive(false)}
                                 to='/'
                                 aria-label='Go to TrickFire Robotics homepage'
                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                 className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                                 onClick={() => setIsNavActive(false)}
                                 to='/about-us'
                                 aria-label='Go to About Us page'
                                >
                                    <span>About us</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                 className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                                 onClick={() => setIsNavActive(false)}
                                 to='/get-involved'
                                 aria-label='Go to Get Involved page'
                                >
                                    <span>Get Involved</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                 className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'} 
                                 onClick={() => setIsNavActive(false)}
                                 to='/events'
                                 aria-label='Go to Events page'
                                >
                                    <span>Events</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
            </MaxWidthContainer>
        </header>
    )
}