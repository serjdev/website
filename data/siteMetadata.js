// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Sergiu Grisca WebSite',
  author: 'Sergiu Grisca',
  headerTitle: 'Sergiu Grisca',
  description: 'Sergiu Grisca personal website',
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://serjdev.com/',
  siteRepo: 'https://github.com/Serj10GR/website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 's.grisca@gmail.com',
  github: 'https://github.com/Serj10GR',
  twitter: 'https://twitter.com/SergiuGrisca',
  facebook: 'https://www.facebook.com/sergiu.grisca.1',
  linkedin: 'https://www.linkedin.com/in/sergiu-grisca/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'https://serjdev.com/',
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
