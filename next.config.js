const withFonts = require('next-fonts');
module.exports = withFonts();

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssLoaderOptions: {
      url: false
    }
  });