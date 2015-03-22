# stefanzweifel.io

[![Build Status](https://travis-ci.org/stefanzweifel/stefanzweifel.io.svg?branch=master)](https://travis-ci.org/stefanzweifel/stefanzweifel.io)

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

## Continous Integration
This website has some simple tests, which will be triggered everytime someone pushes to this repository. [See Travis-CI](https://travis-ci.org/stefanzweifel/stefanzweifel.io/)

## Contribution

You found an error, want to change something or just found a typo? Then create an [issue](http://github.com/stefanzweifel/stefanzweifel.io/issues/new) and I will look into that.


## Copyright

Feel free to use some snippets from my code. I would appreciate it, if you would mention me in some way :)

## License

The MIT License (MIT)

Copyright (c) [2015] [Stefan Zweifel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.