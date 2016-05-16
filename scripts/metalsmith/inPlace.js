var inPlace = require('metalsmith-in-place');

module.exports = inPlace({
    engine: 'swig',
    pattern: '**/*.{html,md}'
})