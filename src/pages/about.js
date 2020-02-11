import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div>
            <Img
              fluid={data.profilePic.childImageSharp.fluid}
              className="kg-image-profile"
            ></Img>
          </div>
          <h2>Hey, my name is Raphaël and I love making content</h2>

          <div>
            <p>&nbsp;</p>
            <h3>Videographer / Photographer</h3>
            <p>
              I started out making movies in my backyard with my friends.
              Creating lasting images is something that has inspired me and
              still does to this day.
            </p>
            <p>
              The past few summers I have taken pictures and Videos for <a href="https://www.boardx.be/">BoardX </a>
              and during the winter I make videos for <a href="https://www.onthemountain.ch/"> Neige Aventure / On The
              Mountain</a>
            </p>
            <p>&nbsp;</p>
          </div>
          <div>
            <h3 id="dynamic-styles">Web Developer</h3>

            <p>
              I started playing around with HTML and CSS when I was a kid. Once
              I learned that all this could be manipulated using JS and backend
              programming I was hooked.
            </p>
            <p>
              Professionally, I have had the chance to work on several different
              projects using different technologies, always related to the web.
            </p>
            <p>
              Extending my knowledge to others, I have taught courses on
              HTML5/CSS3, javascript, Angular and Angular 2 using TypeScript.
            </p>
            <p>
              Check out some of my open-source contributions on{" "}
              <a href="https://github.com/RifRaf44"> Github</a>
            </p>
          </div>

          <p>&nbsp;</p>
          <h3>Wanna get in touch?</h3>
          <div>
            <h4>
              <a href="http://m.me/raphael.vercruyssen" target="_blank">
                Chat with me on FB Messenger
              </a>
            </h4>
            <h4>
              <a href="mailto:raphael@vercruyssen.com">Send me an email</a>
            </h4>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profilePic: file(relativePath: { eq: "profile-pic2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
