import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import avatar from '../images/hd.png'

const links = [
  {
    title: 'Blog / Artikel',
    description: 'Kumpulan artikel dan tulisan teknologi',
    url: '/blog/',
    internal: true,
    icon: '📝',
  },
  {
    title: 'LinkedIn',
    description: 'Profil profesional dan karier',
    url: 'https://tell.my.id/lin',
    internal: false,
    icon: '💼',
  },
  {
    title: 'GitHub',
    description: 'Repositori open source dan proyek',
    url: 'https://go.tell.my.id/github',
    internal: false,
    icon: '💻',
  },
  {
    title: 'Email',
    description: 'Kontak dan pesan langsung',
    url: 'https://go.tell.my.id/mail',
    internal: false,
    icon: '✉️',
  },
]

export default class LinkPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Tautan – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="linktree-container">
            <header className="linktree-header">
              <img src={avatar} alt={config.siteTitle} className="linktree-avatar" />
              <h1>{config.siteTitle}</h1>
              <p className="linktree-tagline">{config.siteDescription}</p>
            </header>

            <ul className="linktree-list">
              {links.map((item) => (
                <li key={item.title} className="linktree-item">
                  {item.internal ? (
                    <Link to={item.url} className="linktree-card">
                      <div className="linktree-card-left">
                        <span className="linktree-icon">{item.icon}</span>
                        <div className="linktree-text">
                          <span className="linktree-title">{item.title}</span>
                          <span className="linktree-desc">{item.description}</span>
                        </div>
                      </div>
                      <span className="linktree-arrow">&rarr;</span>
                    </Link>
                  ) : (
                    <a
                      href={item.url}
                      className="linktree-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="linktree-card-left">
                        <span className="linktree-icon">{item.icon}</span>
                        <div className="linktree-text">
                          <span className="linktree-title">{item.title}</span>
                          <span className="linktree-desc">{item.description}</span>
                        </div>
                      </div>
                      <span className="linktree-arrow">&nearr;</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}
