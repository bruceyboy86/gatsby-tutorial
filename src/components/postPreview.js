import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"

const PostPreview = ({title, path, image, alt, summary}) => (
  <div className="illuminatePost">
    <Img fluid={image} alt={alt} />
    <Link to={path}>
      <h4>{title}</h4>
    </Link>
    <div dangerouslySetInnerHTML={{__html: summary}} />
  </div>
);

export default PostPreview;