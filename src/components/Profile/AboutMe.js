import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';

function AboutMe() {

  return (

    <>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex' }}>
        <ProfileSidebar />
      </div>
    </>


  );
}

export default AboutMe;