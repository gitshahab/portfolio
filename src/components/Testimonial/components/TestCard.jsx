import BgImg from "../../../assets/Group (1).png";
import "./TestCard.css";

const TestCard = ({imgPath, testimony, company, name}) => {
  return (
    <div className="card">
        <div className="card__profile">
            <img src={imgPath} alt={name} width="64" height="64" />
            <div className="card__details">
                <h5 className="card__name">{name}</h5>
                <p className="card__company">{company}</p>
            </div>
        </div>
        <div className="test__card__right">
            <img className="card__bg-img" src={BgImg} alt="Decorative Design" />
            <h4 className="card__desc">{testimony}</h4>
        </div>
    </div>
  )
}

export default TestCard