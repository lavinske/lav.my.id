const config = {
  siteTitle: 'Steven Lavinske',
  siteTitleShort: 'Maxine',
  siteTitleAlt: 'Maxine',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.lav.my.id',
  repo: 'https://github.com/lavinske/lav.my.id',
  pathPrefix: '',
  dateFromFormat: 'DD-MM-YYYY',
  dateFormat: 'DD MMM YYYY',
  siteDescription:
    'Steven Lavinske is an university student, focusing to learn modern web development.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://lavinske.substack.com',
  newsletterEmbed: 'https://lavinske.substack.com/embed',
  userName: 'Maxine',
  userEmail: 'steven@lav.my.id',
  userTwitter: 'stevenlavinske',
  menuLinks: [
    {
      name: 'Articles',
      link: '/blog/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
