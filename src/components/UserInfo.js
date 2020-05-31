import React, { Component } from 'react'
import maxine from '../../content/images/maxine.jpg'

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
              <h3>Penulis</h3>
              <p>
                #StaySafeAtHome membuatku membuat semua ini. Gabut dan penasaran, ya itu motivasinya.
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
