var permalinks = require('metalsmith-permalinks');

module.exports = permalinks({
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
});