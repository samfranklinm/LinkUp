import React, { useState, useEffect, useRef } from 'react';
import './NavMenu.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
import { Link } from "react-router-dom";
import logoutuser from './icons/log-out.png';
import myprofile from './icons/user.png';
import usersettings from './icons/settings.png';


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

    const userImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'

    const user = useSelector(selectUser);
    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                {/* <img src={userImage} alt="profile_pic"></img> */}
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
        <li classname="dropdownItem">
            <img src={props.img} alt="menu-icon"></img>
            <a>{props.text}</a>
        </li>
    )
}

export default NavMenu