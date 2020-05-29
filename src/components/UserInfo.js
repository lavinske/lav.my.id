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
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
