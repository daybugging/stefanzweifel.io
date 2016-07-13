---
title:  "Laravel Forge: PHP7 and bzip2"
date:   2016-07-13 22:00
---


In the last weeks I finnaly got my Mojo™ back and began working on [Screeenly](http://screeenly.com) again. One thing that bugged me the most in the last months was the overall performance of the app. I currently host it on [uberspace](http://uberspace.de) which is meant for small sites or projects that doesn’t use a ton of memory (phantomjs uses a lot of memory 😦).
I always wanted to try a Cloud Hoster like Digital Ocean for one of my projects and I think Screeenly finally deserves it’s own server. The cost and my not existing devops knowledge always scared me off this idea. But [Forge](https://forge.laravel.com) comes to the rescue. 

## The Bug Hunt

I setup all accounts and began tinkering around. For hours I couldn’t figure out, why composer and one of my used packages would try to download `phantomjs` 4 times, exit with a `Successfull download` message but wouldn’t put the binary in the correct place.

After reading the actual PHP Code of the pacakge which get’s executed the problem was found. Zip-extraction failed. 😑

But how on earth could I fix that? (Sidenote: I still have no experience in devops. 😂)


## The Solution

After some research the solution was so simple I couldn’t believe it. Just execute a one-liner and restart the server … done.[^: Or you could add `extension=bz2.so` to your `php.ini` file and restart the server]

```shell
sudo apt-get install php7.0-bz2
```


## The Verdict

- Forge doesn’t install the `bz2` extension automatically
- Packages are not perfect, but [PRs](https://github.com/jakoch/phantomjs-installer/pull/33) make them better

¯\\_(ツ)_/¯ 