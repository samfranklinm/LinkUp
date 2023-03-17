import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom'
import HeaderOption from './HeaderOption';
import NavMenu from './NavMenu';
import SearchIcon from '@material-ui/icons/Search';
import notification from '../icons/notification.png';
import messenger from '../icons/messenger.png';
import home from '../icons/home.png';
import logo from '../icons/L.png';


function Header() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img
                        src={logo}
                        alt="LinkUp Logo"
                        onClick={goHome}
                        style={{ cursor: 'pointer' }}
                    />

                    <div className="header__search">
                        <SearchIcon style={{ color: 'black' }} />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="header__right">
                    <Link to="/"><HeaderOption img={home} title="Home" /></Link>
                    <HeaderOption img={messenger} title="Messages" />
                    <HeaderOption img={notification} title="Notifications" />
                    <NavMenu />
                </div>

            </div>

        </>
    );
}

export default Header