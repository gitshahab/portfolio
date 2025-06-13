import Heading from "../common/Heading";
import Img from "../../assets/Frame (1).png";
import "./Testimonial.css";
import TestCard from "./components/TestCard";

const TestimonialMockData = [
  {
    id: 1,
    name: "Floyd Miles",
    imgPath: Img,
    company: "eBay",
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
  },
  {
    id: 2,
    name: "Floyd Miles",
    imgPath: Img,
    company: "eBay",
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
  },
  {
    id: 3,
    name: "Floyd Miles",
    imgPath: Img,
    company: "eBay",
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
  }
];

const Testimonial = () => {
  return (
    <div className="test">
        <Heading headline="What they say"/>
        <div className="test__list">
        {TestimonialMockData.map((data) => (
            <TestCard
            key={data.id}
            id={data.id}
            imgPath={data.imgPath}
            name={data.name}
            company={data.company}
            testimony={data.testimony}
            />
        ))}
        </div>
    </div>
  )
}

export default Testimonial