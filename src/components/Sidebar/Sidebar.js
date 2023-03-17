import React from 'react';
import './Sidebar.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import ProgressBar from './ProgressBar';
import adam from '../icons/adam.jpg';
import brandon from '../icons/brandon.jpg';
import samantha from '../icons/samantha.jpg';

export default function Sidebar() {

    const user = useSelector(selectUser);
    return (
        <div className='sidebar_container'>
            <div>
                <h7> Recommended </h7>
                <hr />
            </div>

            <div className="sidebar">

                <div className="sidebar__top">
                    <Link to="/userprofile">
                        <Avatar src={adam} className="sidebar__avatar">
                            {user.email[0].toUpperCase()}</Avatar>
                    </Link>
                    <h2>{'Adam Dover'}</h2>
                    <Rating name="read-only" value={4.5} size="large" readOnly />
                    <h4>{'Compatibility:'}</h4>
                    <ProgressBar className="sidebar__progressbar" bgcolor="#99ff66" progress='75' height={20} />
                </div>

                <div className="sidebar__top">
                    <Link to="/userprofile">
                        <Avatar src={brandon} className="sidebar__avatar">
                            {user.email[0].toUpperCase()}</Avatar>
                    </Link>
                    <h2>{'Brandon Lowe'}</h2>
                    <Rating name="read-only" value={2} size="large" readOnly />
                    <h4>{'Compatibility:'}</h4>
                    <ProgressBar className="sidebar__progressbar" bgcolor="orange" progress='44' height={20} />
                </div>

                <div className="sidebar__top">
                    <Link to="/userprofile">
                        <Avatar src={samantha} className="sidebar__avatar">
                            {user.email[0].toUpperCase()}</Avatar>
                    </Link>
                    <h2>{'Samantha King'}</h2>
                    <Rating className='sidebar__rating' name="read-only" value={3} size="large" readOnly />
                    <h4>{'Compatibility:'}</h4>
                    <ProgressBar className="sidebar__progressbar" bgcolor="#99ff66" progress='68' height={20} />
                </div>

            </div>
        </div >
    )
}



