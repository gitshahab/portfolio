import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import WorkCard from "./components/WorkCard";
import { WorkMockData } from "./data/WorkMockData";
import "./Work.css";


const Work = ({headline = "Work", show = true}) => {
  return (
    <div className='work'>
        <div className="work__heading">
            <Heading headline={headline} />
            {show && <Link className="work__link" to="/projects" >view all</Link>}
        </div>
        <div className="work__list">
        {WorkMockData.map((data) => (
            <WorkCard
            key={data.id}
            id={data.id}
            workImg={data.imgPath}
            workTitle={data.title}
            workDesc={data.desc}
            tags={data.tags}
            />
        ))}
        </div>
    </div>
  )
}

export default Work