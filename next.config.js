require('dotenv').config()

const withFonts = require('next-fonts');
module.exports = withFonts();

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
});