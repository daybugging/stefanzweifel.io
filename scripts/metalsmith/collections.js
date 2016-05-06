var collections = require('metalsmith-collections');

module.exports = collections({
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
});