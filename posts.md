---
layout: page
title: Articles
permalink: /posts/
---

<ul class="portfolio--grid">
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}"><h3 class="title">{{ post.title }}</h3></a>
        <span class="align--right">{{ post.date | date: "%-d %B %Y" }}</span>
    </li>
    {% endfor %}
</ul>