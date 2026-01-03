import './Layout.scss'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

/**
 * @component
 * 
 * Layout container component that places the footer and navbar at the top and bottom of the page.
 * @returns {JSX.Element}
 */

export const Layout = () => {
    return (
        <div className='layout'>
            <Navbar className='navbar'/>
            <div className='main-content-container'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}