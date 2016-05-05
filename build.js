var Metalsmith         = require('metalsmith');
var archive            = require('metalsmith-archive');
var assets             = require('metalsmith-assets');
var browserSync        = require('metalsmith-browser-sync');
var collections        = require('metalsmith-collections');
var drafts             = require('metalsmith-drafts');
var feed               = require('metalsmith-feed');
var headings           = require('metalsmith-headings');
var headingsidentifier = require("metalsmith-headings-identifier");
var highlighter        = require('highlighter');
var htmlMinifier       = require("metalsmith-html-minifier");
var hyphenate          = require('metalsmith-hyphenate');
var ignore             = require('metalsmith-ignore');
var in_place           = require('metalsmith-in-place');
var layouts            = require('metalsmith-layouts');
var markdown           = require('metalsmith-markdown');
var metallic           = require('metalsmith-metallic');
var pageTitles         = require('metalsmith-page-titles');
var permalinks         = require('metalsmith-permalinks');
var serve              = require('metalsmith-serve');
var sitemap            = require('metalsmith-mapsite');
var slug               = require('metalsmith-slug');
var watch              = require('metalsmith-watch');
var wordcount          = require("metalsmith-word-count");
var redirect = require('metalsmith-redirect');
var linkcheck = require('metalsmith-linkcheck');
var images = require('metalsmith-project-images')

Metalsmith(__dirname)
    .source('src')

    .metadata({
        site: {
            title: 'stefanzweifel',
            url: 'https://stefanzweifel.io'
        }
    })
    .use(browserSync({
        server : "./dist",
        files  : ["src/**/*.md"],
        open: false
    }))
    .use(collections({
        articles: {
            pattern: 'articles/**/*.md',
            sortBy: 'date',
            reverse: true
        },
        projects: {
            pattern: 'projects/**/*.md',
            sortBy: 'date',
            reverse: true
        },
        pages: {
            pattern: 'pages/**/*.md'
        }
    }))
    // .use(archive({
    //     collections: 'articles'
    // }))
    // .use(slug())
    .use(markdown({
        smartypants: true,
        gfm: true,
        tables: true
    }))
    .use(permalinks({
        pattern: ':title',
        date: 'YYYY',
        linksets: [
            {
                match: { collection: 'articles' },
                pattern: 'posts/:title',
            },
            {
                match: { collection: 'projects' },
                pattern: 'projects/:title',
            },
            {
                match: { collection: 'pages' },
                pattern: ':title'
            }
      ]
    }))
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
    .use(headings('h2')) // Available as {{ headings }}
    .use(sitemap('https://stefanzweifel.io'))



    // ----------------------------------------------------------


    .use(layouts({
        engine: 'swig',
        default: 'post.html',
        directory: 'src/layouts',
        partials: 'src/partials'
    }))
    .use(in_place({
        engine: 'swig'
    }))

    .use(headingsidentifier())
    // .use(htmlMinifier()) // Use the default options

    // .use(redirect({
    //     '/foo': '/img/foo.png',
    //     '/bar.html': '/img/'
    //   }))


    .use(
        watch({
            paths: {
                "${source}/**/*": true
            },
            livereload: true,
        })
    )

    // .use(linkcheck())


    .destination('./dist')
    .build(function(err, files) {
        if (err) throw err;
        console.log('🎉 Build finished!');
    });