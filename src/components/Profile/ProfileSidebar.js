import { React } from "react";
import './ProfileSidebar.css';
import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

import { Link } from "react-router-dom";

function ProfileSidebar() {
    const userImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'

    // const user = useSelector(selectUser);
    return (
        <div className="sidebar-container">
            <div className="sidebar-profile-img">
                <img src={userImage} alt="user-profile-img"></img>
            </div>
            <div className="h2-div">Alana Wel</div>
            <div className="stars">
                <Rating name="read-only" value={4.5} size="large" readOnly />
            </div>
            <div className="options-container">
                <div>
                    <Link to="/myprofile/aboutme">
                        <div className="about-me"> About Me </div>
                    </Link>
                </div>
                <div>
                    <Link to="/myprofile/experience">
                        <div className="about-me"> Experience </div>
                    </Link>
                </div>
                <div>
                    <Link to="/myprofile/schedule">
                        <div className="about-me"> Schedule </div>
                    </Link>
                </div>
            </div>
            <div className="add-user">

            </div>

        </div>
    );
}

export default ProfileSidebar;