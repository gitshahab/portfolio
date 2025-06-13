import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import BlogCard from "./components/BlogCard";
import Img1 from "../../assets/image 21.png";
import Img2 from "../../assets/image 21 (1).png";
import Img3 from "../../assets/image 22.png";
import "./Blog.css";

const BlogMockData = [
  { id: 1, title: "How UX works in web", imgPath: Img1, date: "Nov 9, 2023", tags: ["ui", "ux" ]},
  { id: 2, title: "Case study - Analysis Application.", imgPath: Img2, date: "Aug 18, 2023", tags: ["design", "print"]},
  { id: 3, title: "3 ways to develop your skill", imgPath: Img3, date: "Feb 16, 2023", tags: ["figma", "web"]}
];

const Blog = () => {
  return (
    <div className="blog">
        <div className="blog__heading">
            <Heading headline="Blog" />
            <Link className="blog__link" to="/projects" >view all</Link>
        </div>
        <div className="blog__list">
        {BlogMockData.map((data) => (
            <BlogCard
            key={data.id}
            id={data.id}
            imgPath={data.imgPath}
            title={data.title}
            date={data.date}
            tags={data.tags}
            />
        ))}
        </div>
    </div>
  )
}

export default Blog