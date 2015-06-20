---
layout: page
title:  ImguBox
date:   2015-05-20 14:15:00
project-url: https://imgubox.wnx.ch
image: /img/portfolio/imgubox/imgubox-hero@2x.png
description: An "IFTTT" like service, which connects Imgur with Dropbox
---

> ImguBox connects Imgur with Dropbox and syncs your favorites. <br> You find the project here [here](https://imgubox.wnx.ch).

In the early months of 2015 [Imgur](http://imgur.com) released their iOS app. After hours waisted in the endless stream of cat pictures, funny gifs and interesting stories, I thought it would be great to store my favorited albums in my Dropbox. Just for convenience.

I often discovered [huge albums with wallpapers](http://imgur.com/gallery/sWhDa) or [interesting stuff about food](http://imgur.com/gallery/zP7nZ) which I wanted to store for further usage.
And that's how "ImguBox" was born.

<div>
    <img src="/img/portfolio/imgubox/landingpage.png" alt="Landingpage">
</div>

With my favorite PHP Framework, [Laravel 5](http://laravel.com) I quickly scaffolded a simple app, where you can sign up for an account and setup your Imgur and Dropbox account. That's it!

## The struggles

The idea sounded pretty simple. Everytime a user marks an album as their favorite, the corresponding images and description should be stored in a Dropbox account. Simple, right?.

But there is one small thing which bothered me. The Imgur API returns a collection of albums a user has favorited. So everytime ImguBox would to it's Magic&trade;, it would fetch all albums and store it in Dropbox. And that's bad.      
Let's say the app has 100 users. Every user has 100 favorites. If ImguBox fetches those favorites every hour, it has to fetch 10'000 albums (and each album contains maybe 50 images) every hour. For know I've implemented a simple solution. A database records every parsed image for a given user. Now, when we fetch the favorites from Imgur we substract the already processed albums from the collection and proceed with a much smaller collection.

But now the good news. Imgur is working on webhooks. This would eliminate the database overhead and the app would be even smaller and simpler.

<div class="m2 md-m4">
    <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/_stefanzweifel">@_stefanzweifel</a> On our radar! 🚀</p>&mdash; Imgur API (@imgurAPI) <a href="https://twitter.com/imgurAPI/status/590281859453493248">April 20, 2015</a></blockquote>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
   

## What I've learned from this project

- [Push queues](http://laravel.com/docs/5.0/queues#push-queues) are awesome! They let you move time intensive tasks into the background. Due to it's nature, the processing of uploading favorites to Dropbox is timeconsuming I've used queues to process them asynchronously.    
For like half a year I struggled with unterstanding how those queues work, what the differences between push and pull is and how I can use them in a project. Now I got the hang of them and I don't want to miss them anymore.
- Integration Tests are great for small projects like this. Thanks to Jeffrey Way from laracasts, there is a great package for [Laravel](https://github.com/laracasts/integrated). I watched some screencasts, wrote some tests and now I can be certain that the cruical parts of the app work.
- **Don't rush!** I've written the core code of the app in an afternoon. I immediately thought "Okay, let's deploy it. Someone will probably like it.", but then I reallized I should do some deeper tests and then all kinds of exceptions where thrown. I went back to the drawing board and I've rewritten the app.    
Now the app should handle most common errors well and I will be informed if something goes wrong.


## Open Source

As always, the whole application is free to use and Open Source. You can find the code on [Github](https://github.com/stefanzweifel/imgubox). Feel free to open issues, pull-request or leave some feedback.

You can find the live site at [https://imgubox.wnx.ch](https://imgubox.wnx.ch).