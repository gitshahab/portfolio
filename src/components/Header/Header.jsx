import Nav from "./components/Nav";
import "./Header.css";
import HeadImg1 from "../../assets/Rectangle.png";
import HeadImg2 from "../../assets/Rectangle (1).png";
import Dora from "../../assets/doradesign.png";
import Wave from "../../assets/Group.png"
import Silsila from "../../assets/Frame.png"

const Header = () => {
  return (
    <div className="header">
      <div className="header__banner">
        <h1 className="header__heading">
          I AM A  
          <span className="img-wrapper">
            <img src={HeadImg1} alt="Designer illustration" className="header__img" />
          </span> 
          FREELANCE DESIGNER  
          <span className="img-wrapper">
            <img src={HeadImg2} alt="Work desk icon" className="header__img" />
          </span> 
          FROM SAN FRANCISCO
        </h1>
        <div className="header__base">
          <div className="header__logo"> 
            <img src={Dora} alt="Doradesign" width="136" height="32" />
            <img src={Wave} alt="Wave" width="98" height="32" />
            <img src={Silsila} alt="Silsila" width="98" height="32" />
          </div>
          <p className="header__para">
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header