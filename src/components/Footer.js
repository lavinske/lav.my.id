import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
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
          <a href="https://blog.bankcentral.asia" target="_blank" rel="noopener noreferrer">
            Blog Kolaboratif
          </a>
          <a href="https://taniarascia.com" target="_blank" rel="noopener noreferrer">
            Tema dibuat oleh Tania
          </a>
        </div>
        <div>
          <a href="https://tell.my.id/linkedin" title="View my LinkedIn" target="_blank" rel="noopener noreferrer">
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
