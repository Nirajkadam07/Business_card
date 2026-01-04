import profileImg from "../assets/niraj.png"

export default function Header(){
    return(
        <header className="header-section">
            <div className="profile-box">
                <img src={profileImg} alt="Profile photo of Niraj" className="profile-pic" />
            </div>
            <h1>Niraj Kadam</h1>
            <p className="jobRole">Fullstack Developer</p>
            <p className="website">nirajkadam.website</p>
        </header>
    )
}