import React, { useState, useEffect, useRef } from 'react';
import './NavMenu.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import logoutuser from '../icons/log-out.png';
import myprofile from '../icons/user.png';
import usersettings from '../icons/settings.png';


function NavMenu() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    const user = useSelector(selectUser);
    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                <img src={user.photoUrl} alt="profile_pic"></img>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <ul>
                    <Link to="/myprofile">
                        <DropDownItem img={myprofile} text={"My Profile"} />
                    </Link>
                    <DropDownItem img={usersettings} text={"Settings"} />
                    <div onClick={logoutOfApp}> <DropDownItem img={logoutuser} text={"Logout"} /></div>
                </ul>
            </div >
        </div >

    )
}

function DropDownItem(props) {
    return (
        <div id="dropdownItem">
            <img src={props.img} alt="menu-icon"></img>
            <a>{props.text}</a>
        </div>
    )
}

export default NavMenu