import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import NavMenu from './NavMenu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './icons/L.png';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img
                        src={logo}
                        alt="LinkUp Logo"
                    />

                    <div className="header__search">
                        <SearchIcon style={{ color: 'black' }} />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="header__right">
                    <Link to="/"><HeaderOption Icon={HomeIcon} title="Home" /></Link>
                    <HeaderOption Icon={ChatIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                    <NavMenu />
                </div>

            </div>

        </>
    );
}

export default Header
