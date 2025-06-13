import Heading from "../common/Heading";
import "./Expertise.css";

const ExpertiseMockData = [
  { id: 1, role: "Branding", description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." },
  { id: 2, role: "UI Design", description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." },
  { id: 3, role: "UX Design", description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." },
  { id: 4, role: "Development ", description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." }
];

const Expertise = () => {
  return (
    <div className='expertise'>
        <Heading headline="Expertise" />
        <ul className="expertise__list">
        {ExpertiseMockData.map((item) => (
            <li key={item.id} className="expertise__item">
            <h3 className="expertise__role"><span className="expertise__box"></span>{item.role}</h3>
            <p className="expertise__desc">{item.description}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Expertise