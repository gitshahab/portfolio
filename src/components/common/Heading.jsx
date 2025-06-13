import Star from "../../assets/Star.png";
import "./Heading.css";

const Heading = ({headline}) => {
  return (
    <h3 className="heading"><span className="img-wrapper"><img src={Star} alt="Decorative Star" width="32" height="32" /></span>{headline}</h3>
  )
}

export default Heading