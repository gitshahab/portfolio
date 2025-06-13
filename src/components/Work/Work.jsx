import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import Img1 from "../../assets/image 21.png";
import Img2 from "../../assets/image 21 (1).png";
import Img3 from "../../assets/image 22.png";
import "./Work.css";
import WorkCard from "./components/WorkCard";

const WorkMockData = [
  { id: 1, title: "Analysis Application", imgPath: Img1, desc: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.", tags: ["figma", "ux" ]},
  { id: 2, title: "Fortknox Application", imgPath: Img2, desc: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.", tags: ["mobile", "web"]},
  { id: 3, title: "Zenocide Application", imgPath: Img3, desc: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.", tags: ["app", "web"]}
];

const Work = () => {
  return (
    <div className='work'>
        <div className="work__heading">
            <Heading headline="Work" />
            <Link className="work__link" to="/projects" >view all</Link>
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