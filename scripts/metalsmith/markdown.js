var markdown = require('metalsmith-markdown-remarkable');
var hljs     = require('highlight.js');

module.exports = markdown('full', {
    breaks: true,
    html: true,
    linkify: true,
    langPrefix: 'hljs language-',
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    }
})