---
title: Projects
layout: page.html
---

<section class="df flx-w">
    {% for article in collections.projects %}
        <div class="mb2" style="flex:0 0 320px;">
            <div class="ph2">
                <h3 class="f3-ns mb2 pa0">
                    <a href="/{{ article.path.dir }}" class="link dim">{{ article.title }}</a>
                </h3>
                <p class="ma0 lh-copy">{{ article.description|safe }}</p>
                {% if article.project_url %}
                    <footer class="pa0 ma0 mt2">                
                        <a href="{{ article.project_url }}" class="db link dim">Visit Project</a>
                    </footer>
                {% endif %}
            </div>
        </div>
    {% endfor %}
</section>