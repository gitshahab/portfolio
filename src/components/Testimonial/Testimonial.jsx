import { useState, useEffect } from "react";
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
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic."
  },
  {
    id: 2,
    name: "Floyd Miles",
    imgPath: Img,
    company: "eBay",
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic."
  },
  {
    id: 3,
    name: "Floyd Miles",
    imgPath: Img,
    company: "eBay",
    testimony: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic."
  }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TestimonialMockData.length);
        setFade(true);
        }, 200); // quick fade-out before switching
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
        setCurrentIndex((prev) =>
            prev === 0 ? TestimonialMockData.length - 1 : prev - 1
        );
        setFade(true);
        }, 200);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

  return (
    <div className="test">
      <Heading headline="What they say" />
      <div className={`test__fade-wrapper ${fade ? "fade-in" : "fade-out"}`}>
        <TestCard {...TestimonialMockData[currentIndex]} />
      </div>
      <div className="test__buttons">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Testimonial