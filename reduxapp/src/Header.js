import {NavLink} from 'react-router-dom';
function Header(){
    return(
        <ul>
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Abouts">About</NavLink></li>
            <li><NavLink to ="/Contact">Contact</NavLink></li>
        </ul>
    );
}
export default Header