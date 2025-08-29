import './Layout.scss'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className='layout'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}