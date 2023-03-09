import Header from "../Header/Header";

function MyProfile() {
    return (
        <div>
            <Header />
            <h1> My Profile </h1>
            <Demo />
        </div>
    )
};

function Demo() {
    return (
        <div>
            <h1> demo </h1>
        </div>
    )
};



export default MyProfile;