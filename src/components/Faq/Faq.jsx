import { useState } from "react";
import Heading from "../common/Heading";
import "./faq.css";

const faqData = [
  {
    id: 1,
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs.",
  },
  {
    id: 2,
    question: "What tools and software do you use for UX design?",
    answer: "In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing.",
  },
  {
    id: 3,
    question: "How do you measure the success of your UX designs?",
    answer: "In the test phase, I collect feedback from users to refine the design.",
  },
];

const Faq = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(prev => (prev === id ? null : id));
    };
  return (
    <div className="faq">
        <Heading headline="Frequently asked questions"/>
        {faqData.map((item) => (
            <div
            className={`faq-item ${openId === item.id ? "open" : ""}`}
            key={item.id}
            >
            <button className="faq-question" onClick={() => toggle(item.id)}>
                <h4 className="faq__head">{item.question}</h4>
            </button>
            <div >
                {openId === item.id && <p className="faq__para">{item.answer}</p>}
            </div>
            </div>
        ))}
    </div>
  )
}

export default Faq