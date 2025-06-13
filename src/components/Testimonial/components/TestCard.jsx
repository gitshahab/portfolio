import "./TestCard.css";

const TestCard = ({imgPath, testimony, company, name}) => {
  return (
    <div className="card">
        <div className="card__profile">
            <img src={imgPath} alt={name} width="64" height="64" />
            <div className="card__details">
                <h5>{name}</h5>
                <p>{company}</p>
            </div>
        </div>
        <h4 className="card__desc">{testimony}</h4>
    </div>
  )
}

export default TestCard