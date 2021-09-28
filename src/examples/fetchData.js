import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      siteMetadata: {
        person: { age, name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Hello from fetch data</h1>
      <h2>name: {name}</h2>
      <h3>age: {age}</h3>
    </div>
  )
}

export default FetchData
