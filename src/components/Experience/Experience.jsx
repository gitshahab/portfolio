import Heading from "../common/Heading";
import ExperienceList from "./components/ExperienceList";
import "./Experience.css";

const ExperienceMockData = [
  {
    id: 1,
    role: "Lead Product Designer",
    company: "Fortknox",
    duration: "Mar 2022 - Oct 2023"
  },
  {
    id: 2,
    role: "Intern Designer",
    company: "OmniSafe",
    duration: "Mar 2022 - Oct 2023"
  },
  {
    id: 3,
    role: "UI Designer",
    company: "Doradesign",
    duration: "Mar 2022 - Oct 2023"
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "OpacityAuthor",
    duration: "Mar 2022 - Oct 2023"
  }
];


const Experience = () => {
  return (
    <div className="experience">
        <Heading headline="Experience" />
        {ExperienceMockData.map((data) => (
            <ExperienceList key={data.id} role={data.role} company={data.company} duration={data.duration} />
        ))}
    </div>
  )
}

export default Experience