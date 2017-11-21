// https://github.com/michael-ciniawsky/postcss-load-config
const browserslist = require('./package.json').browserslist
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": browserslist
  }
}
