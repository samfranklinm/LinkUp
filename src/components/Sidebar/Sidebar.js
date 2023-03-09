import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import { Link } from "react-router-dom";
import './Sidebar.css'

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
                        <img src="https://media-exp1.licdn.com/dms/image/C5616AQGpDv5aibcW1w/profile-displaybackgroundimage-shrink_350_1400/0/1552852295802?e=1616025600&v=beta&t=N5r1gZG89SHBYq__9Zcsnk1qVQuyE11Em-ahSpWz78o" alt="background" />
                        <Avatar src={user.photoUrl} className="sidebar__avatar">
                            {user.email[0].toUpperCase()}</Avatar>
                    </Link>
                    <h2>{'Someone One'}</h2>
                    <h4>{'some1@email.com'}</h4>
                </div>
                <div className="sidebar__top">
                    <img src="https://media-exp1.licdn.com/dms/image/C5616AQGpDv5aibcW1w/profile-displaybackgroundimage-shrink_350_1400/0/1552852295802?e=1616025600&v=beta&t=N5r1gZG89SHBYq__9Zcsnk1qVQuyE11Em-ahSpWz78o" alt="background" />
                    <Avatar src={user.photoUrl} className="sidebar__avatar">
                        {user.email[0].toUpperCase()}</Avatar>
                    <h2>{'Someone Two'}</h2>
                    <h4>{'some2@email.com'}</h4>
                </div>
                <div className="sidebar__top">
                    <img src="https://media-exp1.licdn.com/dms/image/C5616AQGpDv5aibcW1w/profile-displaybackgroundimage-shrink_350_1400/0/1552852295802?e=1616025600&v=beta&t=N5r1gZG89SHBYq__9Zcsnk1qVQuyE11Em-ahSpWz78o" alt="background" />
                    <Avatar src={user.photoUrl} className="sidebar__avatar">
                        {user.email[0].toUpperCase()}</Avatar>
                    <h2>{'Someone Three'}</h2>
                    <h4>{'some3@email.com'}</h4>
                </div>

            </div>
        </div >
    )
}
