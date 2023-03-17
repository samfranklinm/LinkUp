import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import './Experience.css';

function UserExperience() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="body-container">
                <ProfileSidebar />
                <div className="experience-body">
                    <h2 className="experience-text">Experience</h2>
                    <hr className="experience-hr"></hr>
                    <div className="experience-container">
                        <ProjectsSub />
                    </div>
                </div>
                <div className="internships-body">
                    <h2 className="internships-text">Internships</h2>
                    <hr className="internships-hr"></hr>
                    <div className="internships-container">
                        <InternshipsSub />
                    </div>
                </div>
                <div className="past_assignments-body">
                    <h2 className="past_assignments-text">Past Assignments</h2>
                    <hr className="past_assignments-hr"></hr>
                    <div className="past_assignments-container">
                        <PastAssignmentsSub />
                    </div>
                </div>
            </div>
        </>
    );
}

function ProjectsSub() {
    return (
        <div className="projects-info">
            <div className="scheduler-body">
                <h2 className="ab-sub-title">iOS TV Remote Control App</h2>
                <h3 className="ab-sub-info">
                    Designer <br></br>
                    <br></br> During the 2021 Hackathon, my group of 4 people decided to
                    design an app that would make it easier for users to control their
                    TV using an iOS app. A team member and I collaborated together
                    to design the app, while the other two team members were in charge of
                    coding the app.
                </h3>
            </div>
            <div className="icecream-body">
                <h2 className="ab-sub-title">Delivery Tracker</h2>
                <h3 className="ab-sub-info">
                    Front-end Developer <br></br>
                    <br></br>
                    This is a website that would allow users to view where and at what
                    time an order would arrive. It made it easier to know when
                    to expect the truck to pass by the neighborhood. <br></br>
                    <br></br>
                    The website was partially coded using CSS and JavaScript.{" "}
                </h3>
            </div>
            <div className="homeworktracker-body">
                <h2 className="ab-sub-title">React Calendar Design</h2>
                <h3 className="ab-sub-info">
                    Designer <br></br>
                    <br></br> The idea behind React Calendar Design is that students would be
                    able to import all their class schedules for the whole quarter into an
                    automated calendar listed by due date. This would enable students to
                    be organized quicker and efficiently. I was part of the design
                    process. The software we use to design the low fidelity prototypes is
                    Figma with a mixture of Adobe XD.{" "}
                </h3>
            </div>
        </div>
    );
}

function InternshipsSub() {
    return (
        <div className="internships-info">
            <div className="facebook-body">
                <h2 className="ab-sub-title">Amazon</h2>
                <h3 className="ab-sub-info">
                    UX/UI Intern <br></br>
                    <br></br> I worked across the stack with other designers,
                    and product management to design a dashboard. The main focus was to
                    improve performance and efficiency of the back end. I also explored
                    building internal frameworks and constructing API endpoints. I was
                    mentored by other developers in which they helped with any questions I
                    had.
                </h3>
            </div>
            <div className="cisco-body">
                <h2 className="ab-sub-title">Stargate</h2>
                <h3 className="ab-sub-info">
                    UX/UI Intern <br></br>
                    <br></br>I was in charge of designing new applications. With this in
                    mind, debugging was a crucial component to ensure programs operated
                    correctly and effectively. I also conducted research on how to solve a
                    large variety of technical issues. I was mainly guided by senior
                    leaders and the mentor assigned to me. <br></br>
                    <br></br>
                    The website was partially coded using CSS and JavaScript.{" "}
                </h3>
            </div>
            <div className="homeworktracker-body">
                <h2 className="ab-sub-title">React Calendar Design</h2>
                <h3 className="ab-sub-info">
                    Designer <br></br>
                    <br></br> The idea behind React Calendar Design is that students would be
                    able to import all their class schedules for the whole quarter into an
                    automated calendar listed by due date. This would enable students to
                    be organized quicker and efficiently. I was part of the design
                    process. The software we use to design the low fidelity prototypes is
                    Figma with a mixture of Adobe XD.{" "}
                </h3>
            </div>
        </div>
    );
}

function PastAssignmentsSub() {
    return (
        <div className="past_assignments-info">
            <div className="uwp101-body">
                <h2 className="ab-sub-title">PSC 100 Final Project</h2>
                <h3 className="ab-sub-info">
                    The final project consisted of making a website portfolio of all the
                    pieces of writings that we had done during the quarter. I used a Wix
                    template to get the website up and running. I ended up placing all the
                    content there.{" "}
                </h3>
            </div>
            <div className="ecs122b-body">
                <h2 className="ab-sub-title">ECS 124 Assignment 1</h2>
                <h3 className="ab-sub-info">
                    This assignment was a homework assignment. It included making suffix
                    trees, suffix arrays, and finding the z-scores of a string. We were
                    allowed to work in pairs. Me and my partner delegated tasks and then
                    afterwards came together to compare answers. <br></br>
                    <br></br>
                    The website was partially coded using CSS and JavaScript.{" "}
                </h3>
            </div>
            <div className="ecs164-body">
                <h2 className="ab-sub-title">ECS 164 Project 1</h2>
                <h3 className="ab-sub-info">
                    For our first proejct we had to work in a group to create a prototype
                    of any we had. It was very flexible in terms of choosing a topic. My
                    group ended up going through the whole design process to create a
                    prototype of a website. We made this using JavaScript, CSS, and HTML.
                </h3>
            </div>
        </div>
    );
}

export default UserExperience;