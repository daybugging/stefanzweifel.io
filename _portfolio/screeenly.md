---
layout: page
title:  screeenly
date:   2014-07-15 16:16:08
project-url: http://screeenly.com
image: /img/portfolio/screeenly/hero-image.png
description: Screeenly gives you a simple API to create screenshots of websites.
---

> [Screeenly](http://screeenly.com) is a simple webservice to create screenshots of websites. Checkout the source code on [Github](https://github.com/stefanzweifel/screeenly).

<figure>
    <img src="/img/portfolio/screeenly/landingpage-v2.png" alt="Landingpage">
    <figcaption>Screeenly doesn't have a big frontend application. The magic happens in the API.</figcaption> 
</figure>


Ever needed a screenshot of a website in a web application? I recently needed this feature in another project and I wasn't happy with current solutions on the market. So I built a small and simple webservice everyone can use.
Sign up with your Github account and start using the API.

If you don't want to use screeenly.com you could even selfhost the application on your own server. You find the source-code on [Github](https://github.com/stefanzweifel/screeenly).

## Good to know

- Under the hood a Laravel app handles the API requests.
- The screenshots are created by fireing up a PhantomJS Client
- Images created by screeenly.com are not stored forever on the server. I delete all files older than 12 hours.

## Known issues

The project is still in it's early days and has some issues. You find a list of kown issues on [Github](https://github.com/stefanzweifel/screeenly/issues).