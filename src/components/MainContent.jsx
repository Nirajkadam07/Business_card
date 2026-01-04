import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"


export default function MainContent(){
    return (
        <main>
            <div className="button-container">
                <button className="btn email-btn"><img src={email} alt="Email icon" /> Email</button>
                <button className="btn linkedin-btn"><img src={linkedin} alt="LinkedIn icon" />LinkedIn</button>
            </div>

            <section className="info-section">
                <h2 className="about">About</h2>
                <p>I am a fullstack developer who enjoy building scalable, user-focused web applications. My goal is to create reliable digital products that deliver real world impact.</p>
                <h2 className="interests">Interests</h2>
                <p>Sports fanatic. Fitness enthusiast. Music scholar. Movies ninja. Explorer</p>
            </section>
        </main>
    )
}