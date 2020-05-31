const config = {
  siteTitle: 'Steven Lavinske',
  siteTitleShort: 'Maxine',
  siteTitleAlt: 'Maxine',
  siteLogo: '/logos/hd.png',
  siteUrl: 'https://www.lav.my.id',
  repo: 'https://github.com/lavinske/lav.my.id',
  pathPrefix: '',
  dateFromFormat: 'dd MM YYYY',
  dateFormat: 'dddd, Do MMMM YYYY',
  siteDescription:
    'Steven Lavinske adalah seorang anak kuliahan biasa.',
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
      name: 'Artikel',
      link: '/blog/',
    },
    {
      name: 'Tentang',
      link: '/saya/',
    },
  ],
  themeColor: '#0094d6', // Used for setting manifest and progress theme colors.
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
