import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import instagram from '../../content/images/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <Link to="/blog/">Blog</Link>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
          <a href="https://blog.bankcentral.asia" target="_blank" rel="noopener noreferrer">
            Blog Kolaboratif
          </a>
          <a href="https://taniarascia.com" target="_blank" rel="noopener noreferrer">
            Template by Tania
          </a>
        </div>
        <div>
          <a href="https://instagram.com/lavinske" title="View my Instagram" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              className="footer-img"
              alt="Instagram"
            />
          </a>
          <a href="https://github.com/lavinske" title="Open-source on GitHub" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify" target="_blank" rel="noopener noreferrer">
            <img
              src={netlify}
              className="footer-img"
              alt="Netlify"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby" target="_blank" rel="noopener noreferrer" style={{marginRight: 0}}>
            <img
              src={gatsby}
              className="footer-img"
              alt="Gatsby"
            />
          </a>
        </div>
      </footer>
    )
  }
}
