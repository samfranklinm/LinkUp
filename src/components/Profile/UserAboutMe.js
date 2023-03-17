import Header from "../Header/Header";
import ProfileSidebar from "./ProfileSidebar"
import './AboutMe.css';
import { Rating } from '@mui/material';

function UserAboutMe() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="body-container">
                <ProfileSidebar />
                <div className="aboutme-classes">
                    <div className="aboutme-body">
                        <h2 className="aboutme-text">About Me</h2>
                        <hr className="about-hr"></hr>
                        <div className="aboutme-container">
                            <AboutMeSub />
                        </div>
                    </div>
                    <div className="classes-body">
                        <h2 className="classes-text">Classes</h2>
                        <hr className="classes-hr"></hr>
                        <div className="classes-container">
                            <Classes />
                        </div>
                    </div>
                </div>
                <div className="mygroups-body">
                    <h2 className="mygroups-text">My Groups</h2>
                    <hr className="mygroups-hr"></hr>
                    <div className="mygroups-container">
                        <MyGroups />
                    </div>
                </div>
                <div className="reviews-body">
                    <h2 className="reviews-text">Reviews</h2>
                    <hr className="reviews-hr"></hr>
                    <div className="reviews-container">
                        <Reviews />
                    </div>
                </div>
            </div>
        </>
    );
}

function AboutMeSub() {
    return (
        <div className="aboutme-info">
            <div className="major-body">
                <h2 className="ab-sub-title">Major</h2>
                <h3 className="ab-sub-info">Cognitive Science</h3>
            </div>
            <div className="minor-body">
                <h2 className="ab-sub-title">Minor</h2>
                <h3 className="ab-sub-info">Pschology</h3>
            </div>
            <div className="career-body">
                <h2 className="ab-sub-title">Aspiring Career</h2>
                <h3 className="ab-sub-info">UX/UI Engineer</h3>
            </div>
            <div className="bio-body">
                <h2 className="ab-sub-title">Biography</h2>
                <h3 className="ab-sub-info">Hello! My name is Adam Dover. I am a third year Cognitive Science major. When I am not studying, I work as a UX/UI freelancer on weekdays. My hobbies include playing soccer, and watching movies. I’m very friendly and love to meet new people!</h3>
            </div>
        </div>
    )
}

function Classes() {
    return (
        <div className="classes-info">
            <div className="class-body">
                <h2 className="c-sub-title">ECS 164</h2>
                <h3 className="c-sub-info">Hao-Chuan Wang</h3>
            </div>
            <div className="class-body">
                <h2 className="c-sub-title">PSC 100</h2>
                <h3 className="c-sub-info">E. Antzoulatos</h3>
            </div>
            <div className="class-body">
                <h2 className="c-sub-title">ECS 124</h2>
                <h3 className="c-sub-info">Y. Frid</h3>
            </div>
        </div>
    )


}


function MyGroups() {
    return (
        <div className="mygroups-info">
            <div className="group-body">
                <h2 className="mg-sub-title">ECS 164 Projects</h2>
                <h3 className="mg-sub-info">Ren Johnson</h3>
                <h3 className="mg-sub-info">James Friedman</h3>
                <h3 className="mg-sub-info">Anne Depp</h3>
            </div>
            <div className="group-body">
                <h2 className="mg-sub-title">PSC 100 Study Group</h2>
                <h3 className="mg-sub-info">Peter Johnson</h3>
                <h3 className="mg-sub-info">James Friedman</h3>
                <h3 className="mg-sub-info">Jacobs Roy</h3>
            </div>
            <div className="group-body">
                <h2 className="mg-sub-title">ECS 124 Study Group</h2>
                <h3 className="mg-sub-info">Toy Edna</h3>
                <h3 className="mg-sub-info">James Skiles</h3>
                <h3 className="mg-sub-info">Peter Johnson</h3>
            </div>
        </div>
    )
}

function Reviews() {
    return (
        <div className="reviews-info">
            <div className="review-body">
                <div className="r-title">
                    <h2 className="r-sub-title">Anonymous User</h2>
                    <div className="starsI">
                        <Rating className='sidebar__rating' name="read-only" value={5} size="medium" readOnly />
                    </div>
                </div>
                <h1 className="r-und-title">Reviewed on February 17, 2023</h1>
                <h3 className="r-sub-info">Adam was very open minded when I was working with him. We worked on a group project and he would always respond quickly. He is friendly and would make sure we were all on task and moving according to our timeline.</h3>
            </div>
            <div className="review-body">
                <div className="r-title">
                    <h2 className="r-sub-title">Anonymous User</h2>
                    <div className="starsI">
                        <Rating className='sidebar__rating' name="read-only" value={5} size="medium" readOnly />
                    </div>
                </div>
                <h1 className="r-und-title">Reviewed on January 20, 2023</h1>
                <h3 className="r-sub-info">Overall, Adam is a good partner. My only issue with him was that he was a late on some occurrences when meeting up due to the bus schedule. I would advice him to plan ahead of time. Besides that, he finished all his work on time and updated our group.</h3>
            </div>
            <div className="review-body">
                <div className="r-title">
                    <h2 className="r-sub-title">Anonymous User</h2>
                    <div className="starsI">
                        <Rating className='sidebar__rating' name="read-only" value={4} size="medium" readOnly />
                    </div>
                </div>
                <h1 className="r-und-title">Reviewed on October 17, 2023</h1>
                <h3 className="r-sub-info">I only worked with Adam once for a pair assignment. He was not able to turn in some items and turned in incomplete tasks. I think we did lack communication on the assignment and the outcome would of been better if he reached out for help.</h3>
            </div>

        </div>

    )

}



export default UserAboutMe;