
import './Header.css'
import { AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = ( {search, setSearch, setCateSelected} ) => {
    const navigate = useNavigate();

    const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();

    const searchBtnHandle = () => {
        console.log(search);
        navigate('/product')
        setCateSelected(search)
    }

    return ( 
        <div className="header">        
            <div className="header-main">
                <div className="header-logo">
                    <img src="./img/logo.png" alt="Logo" className='logo-img'/>
                    <p className='logo-text'>TiTi</p>
                </div>
                <div className="header-search">
                    <input type="text" placeholder='Search your product...' className='search-input' onChange={ e => setSearch(e.target.value)} value={search}/>
                    <button className='btn search-btn' onClick={searchBtnHandle}>Search</button>
                </div>
                <div className="header-user">
                    {
                        isAuthenticated && 
                    <div className="user-info">
                        <AiOutlineUser className='user-icon btn'/>
                        <p>{user.name}</p>
                    </div>
                    }
                    <div className='user-btn-store btn'>
                        <Link to='/cart' className='link'><BsBagCheck /></Link>                        
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="nav-content">
                    <div className="btn nav-btn"><Link className='link' to='/'>Home</Link></div>
                    <div className="btn nav-btn"><Link className='link' to='/product'>Product</Link></div>
                    <div className="btn nav-btn"><Link className='link' to='/about'>About</Link></div>
                    <div className="btn nav-btn"><Link className='link' to='/contact'>Contact</Link></div>
                </div>
                <div className="nav-auth-icon btn">
                    {
                        isAuthenticated 
                        ? <div onClick={ () => logout()}><BiLogOut /></div> 
                        : <div onClick={ () => loginWithRedirect()}><BiLogIn /></div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Header;