import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/thumbnails/netlify.png'
import facebook from '../../content/thumbnails/facebook.png'
import linkedin from '../../content/thumbnails/linkedin.png'
import instagram from '../../content/thumbnails/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
          <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
              Dibangun dengan Gatsby.js
          </a>
        </div>
        <div>
          <a href="https://tell.my.id/lin" title="View my LinkedIn" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin}
              className="footer-img"
              alt="LinkedIn"
            />
          </a>
          <a href="https://tell.my.id/ig" title="View my Instagram" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              className="footer-img"
              alt="Instagram"
            />
          </a>
          <a href="https://tell.my.id/fb" title="View my Facebook" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              className="footer-img"
              alt="Facebook"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify" target="_blank" rel="noopener noreferrer">
            <img
              src={netlify}
              className="footer-img"
              alt="Netlify"
            />
          </a>
        </div>
      </footer>
    )
  }
}
