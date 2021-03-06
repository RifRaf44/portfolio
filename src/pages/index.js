import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Typewriter from "typewriter-effect"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Raphael's Portfolio"
        keywords={[
          `UX Designer`,
          "UI",
          `Web Developer`,
          `Photographer`,
          `Video`,
          `Drone`,
          `Drone Photography`,
          `Aerial Photography`,
          `Surf`,
          "Snow",
          "Raphaël Vercruyssen",
          "raphael vercruyssen",
        ]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UX Designer",
                  "Photographer",
                  "Videographer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h3>
            I{" "}
            <span role="img" aria-label="heart">
              💕
            </span>{" "}
            <span role="img" aria-label="laptop">
              💻
            </span>
            ,{" "}
            <span role="img" aria-label="camera">
              📷
            </span>{" "}
            &{" "}
            <span role="img" aria-label="video">
              📹
            </span>
          </h3>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
