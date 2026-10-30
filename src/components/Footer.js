import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/thumbnails/netlify.png'
import linkedin from '../../content/thumbnails/linkedin.png'
import github from '../images/github.svg'
import email from '../images/email.svg'

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
          <a href="https://go.tell.my.id/github" title="View my GitHub" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://go.tell.my.id/mail" title="Send me an Email" target="_blank" rel="noopener noreferrer">
            <img
              src={email}
              className="footer-img"
              alt="Email"
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
