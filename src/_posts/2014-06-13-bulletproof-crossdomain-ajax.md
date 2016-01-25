---
layout: post
title:  Bulletproof CrossDomain with Ajax
date:   2014-06-13 14:00:00
type: post
---

At work, I recently had a lot to do with CrossDomain-Scripting. The thing I was building has to be bulletproof on older browsers, even IE8.

If you're familiar with [CORS](http://www.html5rocks.com/en/tutorials/cors/), you know it's a pain, to get this working on older browsers. And debugging IE8 on a VM is also not so funny.

Thanks to Github, I found a nice little Jquery-Plugin which helps you on doing Ajax-Requests on older Browser. You can find the code [here](https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest).

Implementation is easy.
Download the code or use the [CDN-Version](http://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.2/jquery.xdomainrequest.min.js) and do your Ajax-Request as usual:


{% highlight js %}
$.getJSON('http://jsonmoon.jsapp.us/').done(function(data) {
  console.log(data.name.first);
});
{% endhighlight %}

The plugin will handle the rest for you!
Now grab a cup of coffee and enjoy the time you saved.