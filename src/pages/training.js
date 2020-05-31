import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import training from '../../data/training_all'
import qwiklabs from '../../content/thumbnails/qwiklabs.png'
import coursera from '../../content/thumbnails/coursera.png'
import icsi from '../../content/thumbnails/icsi.png'


export default class TrainingPage extends Component {
  render() {
    const logoMap = {
      Qwiklabs: qwiklabs,
      Coursera, coursera,
      'International CyberSecurity Institute': icsi,
    }

    const companyStr = Object.keys(logoMap)
      .join(', ')
      .replace(/, ([^,]*)$/, ' and $1')

    const pubs = Object.entries(training)
    return (
      <Layout>
        <Helmet title={`Training dan Sertifikasi – ${config.siteTitle}`} />
        <div className="container">
          <header className="page-header">
            <h1>Pelatihan dan Sertifikasi</h1>
          </header>
          <div className="page">
            <p>Aku telah mengikuti pelatihan di {companyStr}.</p>
            {pubs.map((publication, i) => {
              const company = publication[0]
              const articles = publication[1]

              return (
                <article key={company}>
                  <h2 className="publication-company" id={company.replace(/\s/g, '')}>
                    <img src={logoMap[company]} alt="Company" />
                    {company}
                  </h2>
                  <ul key={i}>
                    {articles.map((article, f) => {
                      return (
                        <li key={f}>
                          <a href={article.path} target="_blank" rel="noopener noreferrer">
                            {article.title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}
