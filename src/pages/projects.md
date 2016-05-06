---
title: Projects
layout: page.html
---

<h1>Projects</h1>

<section>

    {% for article in collections.projects %}
        <div class="dib mr5 mb4 mw6">
            <h2 class="f5 f4-ns ma0 mv2">
                <a href="/{{ article.path.dir }}" class="link black">{{ article.title }}</a>
            </h2>
            <p class="ma0">{{ article.description }}</p>
            <footer>                
                <ul class="list pa0 ma0">
                    <li class="dib mr2"><a href="{{ article.project_url }}" class="db link dim mid-gray">Visit Project</a></li>
                </ul>
            </footer>
        </div>
    {% endfor %}

</section>