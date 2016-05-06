var gulp               = require('gulp');
var gulpsmith          = require('gulpsmith');
var gulp_front_matter  = require('gulp-front-matter');
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

module.exports = function() {

    return gulp.src("./src/**/*")
        .pipe(gulp_front_matter()).on("data", function(file) {
            assign(file, file.frontMatter);
            delete file.frontMatter;
        })
        .pipe(
            gulpsmith()
                .metadata(require('./metadata.js'))
                .use(require('./collections.js'))
                .use(require('./markdown.js'))
                .use(require('./permalinks.js'))
                .use(drafts())
                .use(pageTitles())
                .use(wordcount())
                .use(ignore(['layouts/**/*', 'partials/**/*']))
                .use(images({
                    pattern: '**/**/*.md'
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
                // .use(metallic()) // highlight.js
                // .use(feed({
                //     collection: 'articles',
                //     destination: 'feed.xml'
                // }))
                .use(sitemap('https://stefanzweifel.io'))
                // ----------------------------------------------------------
                .use(require('./layouts.js'))
                .use(require('./inPlace.js'))
                .use(headingsidentifier())
                // .use(htmlMinifier()) // Use the default options
                // .use(linkcheck())
        )
        .pipe(gulp.dest("./dist"));

};