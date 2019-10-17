import React from "react";
import {Link} from "gatsby";

const Pager = ({ pageContext }) => {
  const {previousPagePath, nextPagePath, humanPageNumber} = pageContext;

  return (
    <div className="pagination">
      {previousPagePath && (
        <span><Link to={previousPagePath}>Previous</Link>…</span>
      )}
      {humanPageNumber >1 && (<span>{humanPageNumber}…</span>)}
      {/* {numberOfPages && humanPageNumber > 1 && (<span><Link to={numberOfPages}>{numberOfPages}</Link></span>)} */}
      {nextPagePath && (
        <span>{humanPageNumber > 1 && ('…')}<Link to={nextPagePath}>Next</Link></span>
      )}
    </div>
  )
}

export default Pager;