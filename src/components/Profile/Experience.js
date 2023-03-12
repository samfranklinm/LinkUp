/* 
In the body of the page create the following components (all in this file)
- Projects
- Internships
- Past Assignments
*/

import Header from "../Header/Header";
import ProfileSidebar from "./ProfileSidebar";

function Experience() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ display: 'flex' }}>
                <ProfileSidebar />
                <h1>Experience Page</h1>
            </div>
        </>
    );
}

export default Experience;