require('dotenv').config()

const withFonts = require('next-fonts');
module.exports = withFonts();

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssLoaderOptions: {
      url: false
    }
  });

  module.exports = {
    env: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
  }