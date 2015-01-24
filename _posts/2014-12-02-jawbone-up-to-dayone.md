---
layout: post
title:  Jawbone UP to DayOne
date:   2014-12-02 21:00
type: post
---

Since August I wear a [Jawbone UP 24](https://jawbone.com/up). The app and the  ecosystem is great, but I would also like to export a daily log to my [Dayone-Journal](http://dayoneapp.com).

Sadly there is no IFTTT-Channel for DayOne, but the guys from DayOne offer a CLI. So I created a (small and not bug free) script, which imports a text file to my Day One Journal.

Maybe you can use it too.

![Dayone.app View of generated entry](/img/posts/jawbone-up-to-dayone/dayone-view.png)

## What you need

- DayOne.app
- DayOne CLI
- Dropbox Account
- IFTTT Account
- Jawbone UP (connected with IFTTT)

## What you have to do

- Grab the [DayOne CLI](http://dayoneapp.com/downloads/dayone-cli.pkg) and install it.
- Set up [Dropbox](https://ifttt.com/dropbox) and [Jawbone UP](https://ifttt.com/jawbone_up) IFTTT channels.
- Install the following IFTTT recipe and choose a path to store the logs.

<a href="https://ifttt.com/view_embed_recipe/224961-daily-up-log-to-dropbox" target = "_blank" class="embed_recipe embed_recipe-l_23" id= "embed_recipe-224961"><img src= 'https://ifttt.com/recipe_embed_img/224961' alt="IFTTT Recipe: Daily UP-Log to Dropbox connects up-by-jawbone to dropbox" width="370px" style="max-width:100%"/></a><script async type="text/javascript" src= "//ifttt.com/assets/embed_recipe.js"></script>

- Get the script from [this repo](//github.com/stefanzweifel/up-to-dayone) onto your machine. Best way is to `git clone https://github.com/stefanzweifel/up-to-dayone` where youre logs will be.

- Use your UP for a day and check back tomorrow. IFTTT should put a log file into your Dropbox.

## Usage

Modifiy the variable `LOGDIR` in `toDayOne.sh` to your desire. Then just execute the script in your terminal of choice with the following command:

{% highlight bash %}
sh toDayOne.sh
{% endhighlight%}

The script will simply `cd` into the given directory and get the entry date by the filename. DayOne does the Markdown Magic&trade;.

### But what about automation?

Yes, you could automate the execution of the script, but I like it simple.

### It doesn't work!

[Create an issue](//github.com/stefanzweifel/up-to-dayone/issues/new) or contact me by [email](mailto:hello@stefanzweifel.io) and we will try to fix it.

### Bugs / Contribution

Found a bug? Think the code is bad? [Create an issue](//github.com/stefanzweifel/up-to-dayone/issues/new) or pull request and help to optimize it.
