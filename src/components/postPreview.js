import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"

const getDate = (created) => {
  // add 'nd','st' etc after day of month
  function getNumberWithOrdinal(n) {
      var s = ["th", "st", "nd", "rd"],
          v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  const formattedDay = new Date(created * 1000).toLocaleDateString('en-GB', {
    day: 'numeric'
  });
  const formattedMonthYear = new Date(created * 1000).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  });
  return (
      <>{getNumberWithOrdinal(formattedDay) + ' ' + formattedMonthYear}</>
  )
}

const PostPreview = ({title, path, image, alt, summary, author, category, created, readtime, summaryOff}) => (
  <div className="illuminatePost">
    <div className="featuredImageContainer">
      <a href={path} alt={alt}>
        <span className="readTime">{readtime}</span>
        <Img fluid={image} alt={alt} />
      </a>
    </div>
    <div className="metaContainer">
      <div className="category">{category}</div>
      <div className="postTitle" >
        <Link to={path}>
          {title}
        </Link>
      </div>
      {summaryOff ? null : <summary dangerouslySetInnerHTML={{__html: summary}} />}
      <div className="date">{getDate(created)}</div>
      <div className="author">{author}</div>
    </div>
  </div>
);

export default PostPreview;