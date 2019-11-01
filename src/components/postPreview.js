import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"

const PostPreview = ({title, path, image, alt, summary, author, category, created, readtime}) => (
  <div className="illuminatePost">
    <div className="featuredImageContainer">
      <a href={path} alt={alt}>
        <span className="readTime">{readtime}</span>
        <Img fluid={image} alt={alt} />
      </a>
    </div>
    <div className="metaContainer">
      <span className="category">{category}</span>
      <Link to={path}>
        {title}
      </Link>
      <summary dangerouslySetInnerHTML={{__html: summary}} />
      <span className="date">{created}</span>
      <span className="author">{author}</span>
    </div>
  </div>
);

export default PostPreview;