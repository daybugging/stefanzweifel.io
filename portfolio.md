---
layout: page
title: Portfolio
permalink: /portfolio/
---

What you see here is my work outside of my day to day job. I only list "bigger" projects in this list, but I regularly publish scripts, snippets or packages in my [Github Profile](//github.com/stefanzweifel).

<ul class="portfolio--grid">
    {% for post in site.portfolio %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}">
        </a>

        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>

        <ul class="portfolio-menu text-align--right">
            <li><a href="{{ post.project-url | prepend: site.baseurl }}">Open Project</a></li>
            <li><a href="{{ post.url | prepend: site.baseurl }}">Read more</a></li>
        </ul>

    </li>
    {% endfor %}
</ul>