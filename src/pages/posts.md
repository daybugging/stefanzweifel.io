---
title: Posts
---

<h1>Articles</h1>

<ul>
    {% for article in collections.articles %}
      <li{% if loop.first %} class="first"{% endif %}>
            {{ article.title }}
            <a href="/{{ article.path.dir }}">{{ article.path.dir }}</a>
      </li>
    {% endfor %}
</ul>