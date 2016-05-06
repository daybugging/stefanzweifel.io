var markdown = require('metalsmith-markdown');

module.exports = markdown({
    smartypants: true,
    gfm: true,
    tables: true,
    footnotes: true
});