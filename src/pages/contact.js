import React from "react"
import Layout from "../components/layout"
const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Subway tile drinking vinegar trust fund irony yuccie pickled
              mustache neutra crucifix forage
            </p>
            <p>
              Microdosing poke kombucha, fingerstache chambray intelligentsia
              fashion axe flannel food truck
            </p>
            <p>
              Beard affogato hella tumblr organic vexillologist gluten-free
              seitan
            </p>
          </article>
          <article>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
