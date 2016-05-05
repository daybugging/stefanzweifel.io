---
title: Projects
---

<h1>Projects</h1>

<ul>
{% for article in collections.projects %}
  <li{% if loop.first %} class="first"{% endif %}>
        {{ article.title }}
        <a href="/{{ article.path.dir }}">{{ article.path.dir }}</a>
  </li>
{% endfor %}
</ul>