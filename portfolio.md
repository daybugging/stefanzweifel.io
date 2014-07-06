---
layout: page
title: Portfolio
permalink: /portfolio/
subheader: Stuff I'm working on
bg-class: portfolio-header
---

Due to the fact, that I'm a developer, I can't show you some pretty dribbble screenshots. Most of the time, I have my eyes in my favourite code editor or terminal and do some backend stuff.

However, here I want to show you some projects I've been working on.

<ul>
{% for post in site.posts %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
<!-- <blockquote>
   {{ post.excerpt }}
</blockquote> -->
</li>
{% endfor %}
</ul>