import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              I'm baby migas aesthetic distillery scenester taxidermy hammock
            </h2>
            <p>
              {" "}
              Live-edge mixtape tote bag knausgaard wayfarers pork belly
              pour-over raclette succulents. Retro microdosing shabby chic
              selfies master cleanse crucifix synth vexillologist.
            </p>
            <p>
              +1 mixtape crucifix, chartreuse venmo post-ironic messenger bag
              retro ennui craft beer VHS squid thundercats church-key.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src=".../assets/images/about.jpeg"
            alt="person pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default about
