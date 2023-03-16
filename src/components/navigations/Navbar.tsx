import {NavLink} from 'react-router-dom';
import { unloggedRoutes } from '../../routings/routes';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={unloggedRoutes.home}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={unloggedRoutes.shop}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to={unloggedRoutes.contactUsUnlogged}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to={unloggedRoutes.login}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={unloggedRoutes.register}>Register</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;