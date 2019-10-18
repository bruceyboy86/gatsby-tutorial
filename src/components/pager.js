import React from "react";
import {Link} from "gatsby";

const Pager = ({ pageContext, hasPreviousPage, hasNextPage, pageCount }) => {
  const {previousPagePath, nextPagePath, humanPageNumber} = pageContext;

  function createList () {
    let list = []
    for (let i = 1; i < pageCount; i++) {
      let humanListNumber = i + 1
      list.push(
        humanListNumber === humanPageNumber ? <li className="currentPage"><span>{humanListNumber}</span></li> : <li><Link to={'/explore/'+ humanListNumber}>{humanListNumber}</Link></li>
      )
    }
    return list
  }

  return (
    <div className="pagination">
      <ul>
      {hasPreviousPage && (
        <li><Link to={previousPagePath}>{'<<'}</Link></li>
      )}
      {humanPageNumber > 1 && (<li><Link to={'/explore'}>1</Link></li>)}
      {humanPageNumber === 1 && (<li className="currentPage"><span>1</span></li>)}
      {createList()}
      {hasNextPage && (
        <li><Link to={nextPagePath}>{'>>'}</Link></li>
      )}
      </ul>
    </div>
  )
}

export default Pager;