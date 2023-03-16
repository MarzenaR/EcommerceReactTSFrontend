import {Outlet} from 'react-router-dom'
import Navbar from '../components/navigations/Navbar';

const UnloggedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
        
    )
}

export default UnloggedLayout;