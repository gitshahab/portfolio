import { Link } from "react-router-dom"
import "./WorkCard.css";

const WorkCard = ({id, workImg, workTitle, workDesc, tags }) => {
  return (
    <div className="card-wrapper">
    <div className="card-bg" />
    <div className="orange-blur" />
    
    <div className="card">
        <div className="card__left">
            <img className="card__img" src={workImg} alt={workTitle} />
        </div>
        <div className="card__right">
            <div className="card__right__upper">
                <h3 className="card__heading">{workTitle}</h3>
                <p className="card-para">{workDesc}</p>
                <div className="card__role">
                    {tags.map((tag, index) => (
                    <span className="card__tag" key={index}>{tag}</span>
                    ))}
                </div>
            </div>
            <Link className="card__btn" to={`/details/${id}`}>View Case Study</Link>
        </div>
    </div>
    </div>
  )
}

export default WorkCard