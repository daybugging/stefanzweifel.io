---
layout: post
title:  Gandi Domain auf Uberspace einrichten
date:   2014-07-30 16:16:08
subheader: Posts haben keine Subheader
---

Ich bin kein Experte in Sachen DNS und Domains. So hatte ich letztens meine Mühe eine bei [Gandi](https://www.gandi.net/) gekaufte Domain auf meinem Uberspace einzurichten.
Falls noch jemand das Problem hat, hier eine kleine Anleitung.


**auf deinem Uberspace**

{% highlight bash %}
uberspace-add-domain -d domain.tld -w -m
{% endhighlight %}

Gibt als Return

{% highlight bash %}
The webserver's configuration is adapted; it will get active within at most 5 minutes.
Now you can use the following records for your dns:
  A -> 12.34.56.78
  AAAA -> 2002:0:0:0:0:0:c22:384e
The mailserver's configuration is now adapted; it is now active.
Now you can use the following record for your dns:
  MX -> irgendwas.uberspace.de
{% endhighlight %}

Hier bitte die Werte für A, AAAA und MX merken.


**in deinem Gandi Account**

- Domain auswählen
- *Edit Zone* und ein neues Zone-File anlegen
- Neue Version anlegen
- IPs nach folgendem Muster anlegen

![Gandi Zone File](/img/posts/gandi/gandi_zone_file.png)

Was mir am Anfang nicht klar war, ist dass das @-Zeichen als "leerer Wert" erkannt wird. Dadurch sind dann auch Domains ohne die www-Subdomain erreichbar.

