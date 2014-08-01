---
layout: page
title: Portfolio
permalink: /portfolio/
subheader: Stuff I'm working on
bg-class: portfolio-header
---

> *Still in development.*

"Portfolio" is somehow not a good word for this site. I'm a webdeveloper. I work on big projects during my work days and due to NDAs I can't show you the source code or pictures of my work.

However, the work outside of 2media is what you see here. Smaller and bigger sideprojects, useful scripts and other stuff. If you have any questions to my work, hit me on [Twitter]({{ site.data.urls.twitter }}).


<ul class="portfolio__grid">
    {% for post in site.portfolio %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <h3 class="title">{{ post.title }}</h3></a>
            <p class="description">{{ post.description }}</p>
    </li>
    {% endfor %}
</ul>