import React from "react";
import PostPreview from "./postPreview";

const Collection = ({collectionObject}) => {
  return(
    <div className="postCollectionContainer">
      <div className="psotCollection">
        <h2>{collectionObject.title}</h2>
        <div className={collectionObject.relationships.field_layout.field_css_class}>
          {collectionObject.relationships.field_articles.slice(0, 6).map(post => (
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
      </div>
    </div>
  )
}

export default Collection;