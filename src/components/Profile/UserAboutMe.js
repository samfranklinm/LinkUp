import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import './MyProfile.css'

function UserAboutMe() {

    return (
        <>
            <div>
                <Header />
            </div>
            <h3 style={{ color: 'black' }}>ABout meeeee</h3>
            <div style={{ display: 'flex' }}>
                <ProfileSidebar />
            </div>

        </>
    );
}

export default UserAboutMe;