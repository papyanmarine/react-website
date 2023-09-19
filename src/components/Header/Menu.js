import {NavLink} from 'react-router-dom';

const Menu =() =>{
    return (
        <nav className="menu">
            <ul className="fl-row a-c">
                <li className="menu-item h-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-item h-item">
                    <NavLink to="/hotels">Hotels</NavLink>
                </li>
                <li className="menu-item h-item">
                    <NavLink to="/packages">Packages</NavLink>
                </li>
            </ul>
        </nav>
        
    )
};
export default Menu;