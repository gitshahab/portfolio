import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </Suspense>
  );
};

export default AppRouter;
