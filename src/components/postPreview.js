import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"

const PostPreview = ({title, path, image, alt, summary}) => (
  <div>
    <Link to={path}>
      <h2>{title}</h2>
    </Link>
    <Img fluid={image} alt={alt} />
    <div dangerouslySetInnerHTML={{__html: summary}} />
  </div>
);

export default PostPreview;