import React, { Component } from 'react'
import maxine from '../../content/images/maxine.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={maxine} alt="Steven Lavinske" />
            </div>
            <div>
              <h3>Author</h3>
              <p>
                Hey, I’m Steven Lavinske, an university student. I'm now learning Gatsby.js
              </p>

              // <div className="flex">
              //   <a
              //     href="https://ko-fi.com/taniarascia"
              //     className="donate-button"
              //     target="_blank"
              //     rel="noopener noreferrer"
              //   >
              //     <img src={kofi} className="coffee-icon" alt="Coffee icon" />
              //     Buy me a coffee
              //   </a>
              //   <a
              //     className="patreon-button"
              //     href="https://www.patreon.com/taniarascia"
              //     target="_blank"
              //     rel="noopener noreferrer"
              //   >
              //     <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
              //   </a>
              // </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
