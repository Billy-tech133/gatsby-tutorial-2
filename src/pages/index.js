import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      Hello world!
      <div>
        <Link to="/about">about</Link>
      </div>
      <a href="about">reg link</a>
      <a href="http://www.gatsbyjs.com/docs/">gatsby docs</a>
    </Layout>
  )
}
