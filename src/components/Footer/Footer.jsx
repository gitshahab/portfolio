import WEBFLOW from "../../assets/WEBFLOW.png";
import DESIGNER from "../../assets/DESIGNER.png";
import FIGMA from "../../assets/FIGMA.png";
import DEVELOPER from "../../assets/DEVELOPER.png";
import Star from "../../assets/Star.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__logos">
            <img src={WEBFLOW} alt="webflow" width="361"/>
            <img src={Star} alt="webflow" width="64" height="64"/>
            <img src={FIGMA} alt="figme" width="217"/>
            <img src={Star} alt="webflow" width="64" height="64"/>
            <img src={DESIGNER} alt="designer" width="341"/>
            <img src={Star} alt="webflow" width="64" height="64"/>
            <img src={DEVELOPER} alt="developer" width="400"/>
        </div>
        <div className="footer__text">
            <h1 className="footer__head">LET’S TALK!</h1>
            <p className="footer__email">rehanurraihan@gmail.com</p>
            <div className="footer__base">
                <span className="footer__domain">© Rehan Raihan - 2023</span>
                <ul className="footer_links">
                    <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
                    <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer