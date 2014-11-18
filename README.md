# stefanzweifel.io

Hi. You found the uncompiled source code of my personal [website](https://stefanzweifel.io).

## Workflow

I recently switched from Grunt to Gulp and use it on this site. So here's a short list of what Gulp does:

- Build CSS with
- Minify CSS file
- Compress PNG file by the tinypng.com-API

## How to setup the site on your local machine

You need Ruby, [Jekyll](http://jekyllrb.com), [node.js](http://nodejs.org) and [Gulp](http://gulpjs.com).

```
$ git clone https://github.com/stefanzweifel/stefanzweifel.io.git
$ cd stefanzweifel.io
$ npm install
$ mv gulpconfig.json.example gulpconfig.json
$ jekyll serve --watch
```

And in another terminal session execute Gulp. Gulp will now compile SASS to CSS everytime you change something.

```
$ cd path/to/stefanzweifel.io
$ gulp
```

## Contribution

You found an error, want to change something or just found a typo? Then create an [issue](http://github.com/stefanzweifel/stefanzweifel.io/issues/new) and I will look into that.


## Copyright

Despite being open sourced, all code and content remain copyright of Stefan Zweifel. If you wan't to use some of my code, drop a [tweet](http://twitter.com/_stefanzweifel).