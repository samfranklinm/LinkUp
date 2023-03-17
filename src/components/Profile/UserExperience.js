import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import './Experience.css';

function UserExperience() {

    return (
        <>
            <div>
                <Header />
            </div>
            <h3 style={{ color: 'black' }}>User Experience</h3>
            <div style={{ display: 'flex' }}>
                <ProfileSidebar />
            </div>

        </>
    );
}

export default UserExperience;