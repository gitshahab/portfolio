import "./ExperienceList.css";

const ExperienceList = ({role, company, duration}) => {
  return (
    <div className="explist">
        <h4 className="explist__role">{role}</h4>
        <div className="explist__details">
            <h5 className="explist__company">{company}</h5>
            <p className="explist__duration">{duration}</p>
        </div>
    </div>
  )
}

export default ExperienceList