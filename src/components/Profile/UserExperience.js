import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import './Experience.css';

function UserExperience() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ display: 'flex' }}>
                <ProfileSidebar />
                <h3 style={{ color: 'black' }}>User Experience</h3>
            </div>
        </>
    );
}

export default UserExperience;