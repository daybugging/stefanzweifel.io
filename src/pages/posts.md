---
title: Posts
layout: page.html
---

# Articles

<ul class="list pa0 ma0">
    {% for article in collections.articles %}
      <li class="mv3">
            <h3 class="f4 ma0 pa0">
                <a href="/{{ article.path.dir }}" class="link black">
                    {{ article.title }}
                </a>
            </h3>
            <p class="ma0 pa0">
                <small>{{ moment(article.date).format() }}</small>
            </p>
      </li>
    {% endfor %}
</ul>