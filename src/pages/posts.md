---
title: Posts
layout: page.html
---

<ul class="list pa0 ma0">
    {% for article in collections.articles %}
      <li class="mv3">
            <h3 class="f3-ns mb0 pa0">
                <a href="/{{ article.path.dir }}" class="link dim">
                    {{ article.title }}
                </a>
            </h3>
            <div class="lh-copy measure">{{ article.excerpt|safe }}</div>
            <footer class="mid-gray i mb3 pv1">
                <span>{{ article.readingTime }} read</span>
            </footer>
      </li>
    {% endfor %}
</ul>