---
layout: page
title: Posts
permalink: /posts/
subheader: Those weird memories in my head
bg-class: posts-header
---

<ul class="portfolio__grid">
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <h3 class="title">{{ post.title }}</h3>
        </a>
        <p class="description">{{ post.date | date: "%-d %B %Y" }}</p>
    </li>
    {% endfor %}
</ul>