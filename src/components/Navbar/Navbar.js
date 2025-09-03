import './Navbar.scss'
import TrickFireLogo from '../../assets/Navbar/TrickFireLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer'

/**
 * Navbar component that renders subpage navigation links.
 * @component
 */
export const Navbar = () => {
    return (
        <header className='navbar'>
            <MaxWidthContainer>
                <Link className="trickfire-logo-link" to='/'>
                    <img 
                    className='trickfire-logo'
                    src={TrickFireLogo} 
                    alt='TrickFire logo'
                    />
                </Link>
                <nav className='subpage-nav'>
                    <ul className='subpage-list'>
                        <li>
                            <NavLink 
                             className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                             to='/about-us'>
                                <h2>About us</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                             className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'}
                             to='/get-involved'>
                                <h2>Get Involved</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                             className={({ isActive }) => isActive ? 'subpage-link active' : 'subpage-link'} 
                             to='/events'
                            >
                                <h2>Events</h2>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </MaxWidthContainer>
        </header>
    )
}