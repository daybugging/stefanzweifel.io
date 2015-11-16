---
layout: post
title:  Sensitive data in Gulp
date:   2014-10-16 21:00
type: post
---

While developing this site I decided to use [Gulp](http://gulpjs.com) instead of [Grunt](http://gruntjs.com) to do all the fancy stuff you should do today (SASS, concat, minify, uglify). I'm already familiar with Grunt from work so I wanted to try something new.

But what does this have to do with sensitive data in Javascript? Well I use [tinypng](https://tinypng.com/) to compress all images on this site. There is even an API and a Gulp wrapper available. But how can I share my Gulpfile with you without sharing my personal API key?

It's simple. You create a config file - let's call it `gulpconfig.json` - and within the file there is a property called `tinypng_api_key`. Now in the gulpfile you load this the file and use it.

{% highlight javascript %}
var config    = require('./gulpconfig.json'),
    gulp      = require('gulp');

gulp.task('png', function () {
    gulp.src('img/portfolio/**/*.png')
        .pipe(tinypng( config.tinypng_api_key ))
        .pipe(gulp.dest('compressed_images'));
});
{% endhighlight%}

Now you simply have to add `gulpconfig.json` to your `.gitignore` and commit it.  
But add a [`gulpconfig.json.example`](https://github.com/stefanzweifel/stefanzweifel.io/blob/335a4b4f71ae605130744fe2e9b2353774056d4d/gulpconfig.json.example) to your repo so your future you knows how to use it.