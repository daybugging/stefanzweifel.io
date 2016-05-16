var Metalsmith         = require('Metalsmith');
var gulpsmith          = require('gulpsmith');
var frontMatter        = require('gulp-front-matter');
var assign             = require('lodash.assign');
var assets             = require('metalsmith-assets');
var drafts             = require('metalsmith-drafts');
var feed               = require('metalsmith-feed');
var headingsidentifier = require("metalsmith-headings-identifier");
var htmlMinifier       = require("metalsmith-html-minifier");
var hyphenate          = require('metalsmith-hyphenate');
var ignore             = require('metalsmith-ignore');
var metallic           = require('metalsmith-metallic');
var pageTitles         = require('metalsmith-page-titles');
var sitemap            = require('metalsmith-mapsite');
var slug               = require('metalsmith-slug');
var wordcount          = require("metalsmith-word-count");
var linkcheck          = require('metalsmith-linkcheck');
var images             = require('metalsmith-project-images');
var define             = require('metalsmith-define');
var excerpts           = require('metalsmith-better-excerpts');
var excerpts           = require('metalsmith-excerpts');

Metalsmith('./')
    .metadata(require('./metadata.js'))
    .use(define({
        moment: require('moment')
    }))
    .use(require('./collections.js'))
    .use(require('./markdown.js'))
    .use(require('./permalinks.js'))
    .use(drafts())
    .use(ignore(['layouts/**/*', 'partials/**/*']))
    .use(pageTitles())
    .use(wordcount())
    .use(images({
        pattern: '**/**/*.md'
    }))

    .use(excerpts({
        pruneLength: 160
    }))

    // Experimental Stuff ------------------------------------------
    // .use(assets({
    //     source: './src/assets', // relative to the working directory
    //     destination: './assets' // relative to the build directory
    // }))
    // .use(hyphenate({
    //     "elements": ["p", "blockquote"],
    //     "langModule": "hyphenation.de",
    //     "ignore": ["archives/*"] // All the files inside 'archive' will not be hyphenated
    // }))
    .use(metallic()) // highlight.js
    // .use(feed({
    //     collection: 'articles',
    //     destination: 'feed.xml'
    // }))
    .use(sitemap(require('./metadata.js').site.url))
    // ----------------------------------------------------------
    .use(require('./layouts.js'))
    .use(require('./inPlace.js'))

    // .use(headingsidentifier({
    //     linkTemplate: "<a class='heading-anchor' href='#%s'><span class='heading-anchor--element'>¶</span></a>",
    //     selector: ['h1', 'h2', 'h3']
    // }))

    .use(htmlMinifier()) // Use the default options
    .use(linkcheck())
    .destination('./dist')
    .build(function(err) {
    if (err) throw err;
    console.log('Build finished!');
    });