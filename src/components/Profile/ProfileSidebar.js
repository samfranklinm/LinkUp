import { React, useState, useEffect, useRef } from "react";
import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Link } from "react-router-dom";
import adam from '../icons/adam.jpg';
import add from '../icons/add.png';
import './ProfileSidebar.css';


function ProfileSidebar() {


    const [url, setUrl] = useState('');
    const user = useSelector(selectUser);

    useEffect(() => {
        setUrl(window.location.href);
    });


    console.log(url);

    return (
        <div className="sidebar-container">
            <div className="sidebar-profile-img">
                {
                    url.match('/myprofile') ?
                        <div> <img className="sd-img" src={user && user.photoUrl} alt="user-profile-img"></img>
                            <div className="h2-div">Harry Bell</div>
                            <div className="stars">
                                <Rating name="read-only" value={5} size="large" readOnly />
                            </div>
                        </div>
                        :
                        <div>
                            <img className="sd-img" src={adam} alt="user-profile-img"></img>
                            <div className="h2-div">Adam Dover</div>
                            <div className="stars">
                                <Rating name="read-only" value={5} size="large" readOnly />
                            </div>
                        </div>
                }
            </div>
            {
                url.match('/myprofile') ?
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
                    :
                    <div className="options-container">
                        <div>
                            <Link to="/userprofile/aboutme">
                                <div className="about-me"> About Me </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/userprofile/experience">
                                <div className="about-me"> Experience </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/userprofile/schedule">
                                <div className="about-me"> Schedule </div>
                            </Link>
                        </div>

                        <div onClick={handleAddClick}>
                            <img className="add-img" src={add} alt="add-img"></img>
                        </div>
                    </div>

            }
            <div className="add-user">

            </div>

        </div>
    );
}

function handleAddClick() {
    alert('Request Sent!');
}

export default ProfileSidebar;