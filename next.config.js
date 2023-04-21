require('dotenv').config()

const withFonts = require('next-fonts');
module.exports = withFonts();

module.exports = {
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};