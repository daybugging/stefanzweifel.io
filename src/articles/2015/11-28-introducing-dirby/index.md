---
title:  "Introducing: Dirby"
date:   2015-11-28 21:00
---

Some weeks ago I silently open sourced [Dirby](http://github.com/stefanzweifel/dirby). An opinionated [Kirby](https://getkirby.com) theme. 

<figure>
    <img src="images/code-example.png" alt="An example page showing a code snippet.">
    <figcaption>An example page with syntax highlighted code.</figcaption>
</figure>

My team and I were searching for an easy to use CMS to create a web documentation for our projects. We used Kirby in previous projects and were amazed by how easy you can customize and extend it. 
We quickly patched a working prototype together, but it never looked good. It never took off and nobody wanted to make it better. I took the opportunity, built Dirby and open sourced it.

## Under the hood

In its core it's just Bootstrap, [Hightlight.js](https://highlightjs.org/) (for code snippets), [Clipboard.js](https://zenorocha.github.io/clipboard.js/) (to easily share urls) and some basic pages (Search, Sitemap and Login).

## Use it!

The installation is quite easy. Just copy `site/*`, `content/*` and `assets/*` into your Kirby installation. The default template (`site/templates/default.php`) loads the necessary files and you're ready to go.
You find more information in the [README](https://github.com/stefanzweifel/dirby/blob/master/README.md) file.