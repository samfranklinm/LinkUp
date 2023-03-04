import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';


function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };
    const user = useSelector(selectUser);
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="./L.png"
                    alt="LinkUp Logo"
                />

                <div className="header__search">
                    <SearchIcon style={{ color: 'black' }} />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <Avatar src={user.photoUrl}></Avatar>
                <HeaderOption avatar={true} title="Log Out" onClick={logoutOfApp} />

            </div>
        </div>
    );
}

export default Header
