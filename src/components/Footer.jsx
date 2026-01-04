import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"

export default function Footer(){
    return (
        <footer className="footer">
            <img src={twitter} alt="Twitter icon" />
            <img src={facebook} alt="Facebook icon" />
            <img src={instagram} alt="Instagram icon" />
            <img src={github} alt="Github icon" />
        </footer>
    )
}
