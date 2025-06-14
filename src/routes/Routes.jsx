import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import { PageNotFound } from "../components/common/PageNotFound";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const WorkDetails = lazy(() => import("../components/Work/WorkDetails"));
const Blogs = lazy(() => import("../pages/Blogs"));
const BlogDetails = lazy(() => import("../components/Blog/BlogDetails"));


const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<WorkDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/details/:id" element={<BlogDetails/>} />
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
};

export default AppRouter;
