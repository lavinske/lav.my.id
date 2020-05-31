import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import training from '../../data/training'
import maxine from '../../content/images/maxine.jpg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Catatan Harian`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Halo, Saya Steven`} </h1>
              <p>
                {`Anak kuliahan dari Bandung, demen ngorpek project `}
                <a href="https://github.com/lavinske" target="_blank" rel="noopener noreferrer">
                  open source
                </a>{' '}
                dan <Link to="/blog">nulis</Link>{` tentang development web di era modern, juga suka nulis writeup machinenya `}<a href="https://hackthebox.eu" target="_blank" rel="noopener noreferrer">
                  HackTheBox
                </a>{' '}dan mungkin apa yang ku pelajari sekarang sih.
              </p>
              <div className="social-buttons">
                <GitHubButton
                  href="https://github.com/lavinske"
                  data-size="large"
                  data-show-count="true"
                >
                  lavinske
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Tulisan Terbaru
              <Link to="/blog" className="view-all">
                Lihat Semua
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Tulisan Terpopuler
              <Link to="/categories/populer" className="view-all">
                Lihat Semua
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Project</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Pelatihan dan Sertifikasi</h2>
            <SimpleListing simple data={training} />
          </section>

        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "populer" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
