/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Sergiu Grisca',
  author: 'Sergiu Grisca',
  headerTitle: 'Sergiu Grisca - personal website',
  description: 'Sergiu Grisca personal website and blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.serjdev.com/',
  siteRepo: 'https://github.com/Serj10GR/website',
  siteLogo: '/static/images/logo.png',
  // socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'sergiu.grisca.jr@gmail.com',
  github: 'https://github.com/Serj10GR',
  x: 'https://twitter.com/sergiu_grisca',
  //facebook: 'https://www.facebook.com/sergiu.grisca.1',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/sergiu-grisca/',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
