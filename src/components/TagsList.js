import React from "react"
import { Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const { text, value } = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {tag} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
