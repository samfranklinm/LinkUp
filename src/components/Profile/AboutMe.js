/* 
In the body of the page create the following components (all in this file)
- AboutMe
- Classes
- MyGroups
- Reviews 
*/

import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import { Rating } from '@mui/material';




function AboutBox() {
    return (
      <div style={{border: '1px gray', borderRadius: 10, padding: 10, marginBottom: 10, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
        <h2>About Me</h2>
        <hr></hr>

        <h4>Major</h4>
        <p>Computer Science</p>
        <br></br>

        <h4>Minor</h4>
        <p>N/A</p>
        <br></br>

        <h4>Aspiring Career</h4>
        <p>Title of career and an explanation (optional)</p>
        <br></br>

        <h4>Biography</h4>
        <p>Student biography here</p>
        <br></br>
      </div>
    );
  }
  
  function ClassesBox() {
    return (
      <div style={{border: '1px gray', borderRadius: 10, padding: 10, marginBottom: 10, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
        <h2>Classes</h2>
        <hr></hr>

        <h4>ECS 164</h4>
        <p>Hao-Chuan Wang</p>
        <br></br>

        <h4>ECS 122B</h4>
        <p>Frid, Section A04</p>
        <br></br>

        <h4>UWP 101</h4>
        <p>Melzer, Section A02</p>
        <br></br>

        <h4>ECS 150</h4>
        <p>Bishop, Section A02</p>
      </div>
    );
  }

  function GroupsBox() {
    return (
      <div style={{border: '1px gray', borderRadius: 10, padding: 10, marginBottom: 10, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
        <h2>My Groups</h2>
        <hr></hr>
        <h4>ECS 164 Project 1</h4>
        <p>Student Name</p>
        <p>Student Name</p>
        <p>Student Name</p>
        <p>Student Name</p>
        <p>Student Name</p>

        <br></br>
        <h4>ECS 122B Study Group</h4>
        <p>Student Name</p>
        <p>Student Name</p>
        <p>Student Name</p>
        <br></br>

        <h4>UWP 101 Final Project</h4>
        <p>Student Name</p>
        <p>Student Name</p>
        <p>Student Name</p>
        <br></br>

      </div>
    );
  }
  function ReviewBox() {
    return (
      <div style={{border: '1px gray', borderRadius: 10, padding: 10, marginBottom: 10, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
        <h2>My Reviews</h2>
        <hr></hr>
        <h4>Anonymous User</h4>
        <Rating value={4.5} readOnly></Rating>
        <p>Review.Review.Review.Review.Review.</p>
        <br></br>

        <h4>Anonymous User</h4>
        <Rating value={3} readOnly></Rating>
        <p>Review.Review.Review.Review.Review.</p>
        <br></br>

        <h4>Anonymous User</h4>
        <Rating value={4} readOnly></Rating>
        <p>Review.Review.Review.Review.Review.</p>
        <br></br>

      </div>
    );
  }


function AboutMe() {

    return (

        <>
            <div>
                <Header />
            </div>
            <div style={{ display: 'flex'}}>
                <ProfileSidebar />
                <div className="profile-columns">
                    
                <   div style={{
                        display: 'block', 
                        justifyContent: 'space-between', 
                        padding:'20px', 
                        height: '200px', 
                        width: '500px',
                        marginBottom: '100px'
                        }}>
                        <AboutBox />
                    </div>
                    <div style={{
                        display: 'block', 
                        justifyContent: 'space-between', 
                        padding:'20px', 
                        height: '200px', 
                        width: '500px',
                        marginBottom: '100px'
                        }}>
                        <ClassesBox />
                    </div>
                </div>
                
                <div className="profile-columns">
                
                    <div style={{
                        display: 'block', 
                        justifyContent: 'space-between', 
                        padding:'20px', 
                        height: '200px', 
                        width: '500px'
                        }}>
                        <GroupsBox />
                    </div>
                
                </div>
                <div className="profile-columns">
        
                    <div style={{
                        display: 'block', 
                        justifyContent: 'space-between', 
                        padding:'20px', 
                        height: '200px', 
                        width: '500px'
                        }}>
                        <ReviewBox />
                        
                    </div>
                
                </div>
                
            </div>
           
        </>
        
        
    );
}

export default AboutMe;