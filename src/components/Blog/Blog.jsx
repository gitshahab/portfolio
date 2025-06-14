import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import BlogCard from "./components/BlogCard";
import { BlogMockData } from "./data/BlogMockData";
import "./Blog.css";

const Blog = ({headline = "Blog", show = true}) => {
  return (
    <div className="blog">
        <div className="blog__heading">
            <Heading headline={headline} />
            {show && <Link className="blog__link" to="/blogs" >view all</Link>}
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