import { FaTruckMoving } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className='nav'>
            <FaTruckMoving className='nav-icon'/>
            <p>FREE shipping when shopping upto 500$</p>
        </nav>
     );
}
 
export default Nav;