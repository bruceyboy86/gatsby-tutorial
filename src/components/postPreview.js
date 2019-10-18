import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"

const PostPreview = ({title, path, image, alt, summary}) => (
  <div className="illuminatePost">
    <div className="featuredImageContainer">
      <Img fluid={image} alt={alt} />
    </div>
    <div className="metaContainer">
      <Link to={path}>
        {title}
      </Link>
      <div dangerouslySetInnerHTML={{__html: summary}} />
    </div>
  </div>
);

export default PostPreview;