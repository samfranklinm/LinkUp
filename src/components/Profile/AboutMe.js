/* 
In the body of the page create the following components (all in this file)
- AboutMe
- Classes
- MyGroups
- Reviews 
*/

import Header from "../Header/Header";
import ProfileSidebar from "./ProfileSidebar";

function AboutMe() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ display: 'flex' }}>
                <ProfileSidebar />
                <h1>AboutMe Page</h1>
            </div>
        </>
    );
}

export default AboutMe;