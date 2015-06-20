---
layout: page
title: Portfolio
permalink: /portfolio/
---

What you see here is my work outside of my day to day job. I only list "bigger" projects in this list, but I regularly publish scripts, snippets or packages in my [Github Profile](//github.com/stefanzweifel).


{% for post in site.portfolio %}

<div class="m0">
      
    <a href="{{ post.url | prepend: site.baseurl }}">
        <img src="{{ post.image | prepend: site.baseurl }}" class="border border-silver" alt="{{ post.title }}">
    </a>

    <h2 class="h2 serif">
        <a href="{{ post.url | prepend: site.baseurl }}" class="black">
            {{ post.title }}
        </a>
    </h2>

    <p class="sans gray caps">Published: {{ post.date | date: "%-d %B %Y" }}</p>

    <p>{{ post.description }}</p>

    <div class="mr2 ml2 md-mr4 md-ml4 mt3">
        <a href="{{ post.project-url | prepend: site.baseurl }}" class="nice-anchor p2">Open Project</a>
        <a href="{{ post.url | prepend: site.baseurl }}" class="nice-anchor p2">Continue Reading</a>
    </div>

</div>

<hr class="divider">

{% endfor %}