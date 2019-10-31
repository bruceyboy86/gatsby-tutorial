import React from "react";
import PostPreview from "./postPreview";

const Collection = ({collectionObject}) => {
  return(
      <>
      <h2>{collectionObject.title}</h2>
        <div className="gridContainer">
      {collectionObject.relationships.field_articles.map(post => (
          <PostPreview
            key={post.id}
            title={post.title}
            path={post.path ? post.path.alias : "#"}
            image={post.relationships.field_featured_image.localFile.childImageSharp.fluid}
            alt={post.field_image ? post.field_image.alt : "default"}
            summary={ post.body.summary }
          />
      ))}
        </div>
      </>
  )
}

export default Collection;