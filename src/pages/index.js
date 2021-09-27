import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div>
      Hello world!
      <div>
        <Link to="/about">about</Link>
      </div>
      <a href="about">reg link</a>
      <a href="http://www.gatsbyjs.com/docs/">gatsby docs</a>
    </div>
  )
}
