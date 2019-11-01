import React from "react";
import PostPreview from "./postPreview";

const Collection = ({collectionObject, latestPosts}) => {
  const backgroundStyle = collectionObject.relationships.field_background_colour ? collectionObject.relationships.field_background_colour.field_hex : "initial";
  const titleColour = collectionObject.relationships.field_text_colour ? collectionObject.relationships.field_text_colour.field_hex : "initial";
  const useCorrectData = latestPosts ? latestPosts : collectionObject.relationships.field_articles;
  return(
    <div className="postCollectionContainer" style={{backgroundColor: "#"+backgroundStyle}}>
      <div className="psotCollection">
        <h2 style={{color: "#"+titleColour}}>{collectionObject.title}</h2>
        <div className={collectionObject.relationships.field_layout.field_css_class}>
          {useCorrectData.slice(0, 6).map(post => (
              <PostPreview
                key={post.id}
                readtime={post.field_readtime}
                title={post.title}
                path={post.path ? post.path.alias : "#"}
                image={post.relationships.field_featured_image.localFile.childImageSharp.fluid}
                alt={post.field_image ? post.field_image.alt : "default"}
                summary={ post.body.summary }
                author={post.relationships.field_author_tax.name}
                created={post.created}
                category={post.relationships.field_category.name}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection;