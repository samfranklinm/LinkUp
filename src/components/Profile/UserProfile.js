import Header from "../Header/Header";
import ProfileSidebar from "./ProfileSidebar";
import './UserProfile.css'


function UserProfile() {
    return (
        <>
        <div>
            <Header />
        </div>
        
        <div style={{ display: 'flex'}}>
            <ProfileSidebar />
        
            <div className="profile-columns">
                <br></br>
                <h7> About </h7>
                <hr />
                <div className="box-container">
        
                    <div className="box-content">
                        <p>Major: </p>
                    </div>
                </div>

                
            </div>

            
            <div className="profile-columns">
                <div>
                    <br></br>
                    <h7> Reviews </h7>
                    <hr />
                </div>
                <div className="box-container">
                    <div className="box-content">
                    </div>
                </div>
            </div>
        </div>
       
    </>
    )
};
export default UserProfile;