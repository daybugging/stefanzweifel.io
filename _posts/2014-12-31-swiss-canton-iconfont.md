---
layout: post
title:  Swiss Canton Iconfont
date:   2014-12-30 16:25
type: post
---

During my christmas holidays I finally found the time to finish some of my side and weekend projects. One of those many project is an iconfont. "Not another FontAwesome or Glyphicons clone" you may think. Nope it's not.

Somewhen in 2014 I stumpled upon [Map Glyphs](http://mapglyphs.com/). An iconfont with all the maps of every country in the world. I tought "Would be cool if I could use this for Switzerland specific maps, like our cantons". I wrote it down and never looked at it again.  
But during the holidays and wanted to do something with [Bower](http://bower.io) and icons.
So I grabbed an SVG from Wikipedia, sliced and exported it, uploaded it to [Icomoon.io](http://icomoon.io) and exported it as a font. Done. Thanks to the SVG source the icons are sharp on all display resolutions.

Then I read the docs of Bower, on how to register a new package and boom... Now I can simply execute `bower install swiss-canton-iconfont --save` and use the font in my projects.
It was a lot of fun and I learned another thing of the always growing web development universe.

![Screenshot of a working demo on Github](/img/posts/swiss-canton-iconfont/demo.png)

You can checkout a working demo [here](http://stefanzweifel.github.io/swiss-canton-iconfont/demo.html). Source code is as always on [Github](https://github.com/stefanzweifel/swiss-canton-iconfont).