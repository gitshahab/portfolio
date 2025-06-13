import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ imgPath, date, tags, title }) => {
  return (
    <div className="blogcard">
        <img className="blogcard__img" src={imgPath} alt={title} width="286" height="214"/>
        <div className="blogcard__details">
            <p className="blogcard__date">{date}</p>
            <h3 className="blogcard__heading">{title}</h3>
            <div className="blogcard__role">
                {tags.map((tag, index) => (
                <span className="blog__tag" key={index}>{tag}</span>
                ))}
            </div>
        </div>
        <Link></Link>
    </div>
  )
}

export default BlogCard