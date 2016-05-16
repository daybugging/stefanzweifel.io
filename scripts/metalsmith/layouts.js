var layouts            = require('metalsmith-layouts');

module.exports = layouts({
    engine: 'swig',
    default: 'post.html',
    directory: 'src/layouts',
    partials: 'src/partials',
    pattern: '**/*.{html,md}'
});