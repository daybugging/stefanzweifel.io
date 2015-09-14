---
layout: page
title: Portfolio
permalink: /portfolio/
---

What you see here is my work outside of my day to day job. I only list "bigger" projects in this list, but I regularly publish scripts, snippets or packages in my [Github Profile](//github.com/stefanzweifel).


{% for post in site.portfolio %}

<div class="m0">
      
    <a href="{{ post.url | prepend: site.baseurl }}">
        <img src="{{ post.image | prepend: site.baseurl }}" class="border border-silver md-mb2" alt="{{ post.title }}">
    </a>

    <h2 class="h2">
        <a href="{{ post.url | prepend: site.baseurl }}" class="black">
            {{ post.title }}
        </a>
    </h2>

    <p class="gray caps">Published: {{ post.date | date: "%-d %B %Y" }}</p>

    <p>{{ post.description }}</p>

    <ul class="list-reset mb0">
        <li class="inline-block">
           <a href="{{ post.project-url | prepend: site.baseurl }}" class="inline-block mr1">Open Project</a>
        </li>
        <li class="inline-block">
           <a href="{{ post.url | prepend: site.baseurl }}" class="inline-block ml1">Continue Reading</a>
        </li>
    </ul>

</div>

<!-- <hr class="divider"> -->

{% endfor %}