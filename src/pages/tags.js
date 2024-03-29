import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
const Tags = ({ data }) => {
  console.log(data)
  const content = data.allContentfulRecipe.nodes
  const newTags = setupTags(content)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
