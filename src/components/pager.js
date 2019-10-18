import React from "react";
import {Link} from "gatsby";

const Pager = ({ pageContext, hasPreviousPage, hasNextPage, pageCount }) => {
  const {previousPagePath, nextPagePath, humanPageNumber} = pageContext;

  // goal: for the total amount of pages available show page numbers, max 10.
  // add a function to call.
  // loop from 0 to [amount] and output page links and respective page number
  // conditional on current page link to remove anchor

  function createList () {
    let list = []

    // Outer loop to create parent
    for (let i = 1; i < pageCount; i++) {
      //Create the parent and add the children
      let humanListNumber = i + 1
      list.push(
        humanListNumber === humanPageNumber ? <li>{humanListNumber}</li> : <li><Link to={'/explore/'+ humanListNumber}>{humanListNumber}</Link></li>
      )
    }
    return list
  }

  return (
    <div className="pagination">
      <ul>
      {hasPreviousPage && (
        <li><Link to={previousPagePath}>Previous</Link>…</li>
      )}
      {humanPageNumber > 1 && (<li><Link to={'/explore'}>1</Link></li>)}
      {humanPageNumber === 1 && (<li>1</li>)}
      {createList()}
      {hasNextPage && (
        <li>{humanPageNumber > 1 && ('…')}<Link to={nextPagePath}>Next</Link></li>
      )}
      </ul>
    </div>
  )
}

export default Pager;