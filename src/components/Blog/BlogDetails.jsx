import { useParams } from "react-router-dom";
import Heading from "../common/Heading";
import { BlogMockData } from "./data/BlogMockData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = BlogMockData.find(item => item.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div style={{ minHeight: "810px", padding: "64px 0 64px 0" }}>
        <Heading headline={blog.title} />
        <p style={{ padding: "16px 0 16px 0" }}>
            {Array(20).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lacus nec ligula scelerisque laoreet. ").join(" ")}
        </p>
    </div>
  );
};

export default BlogDetails;
