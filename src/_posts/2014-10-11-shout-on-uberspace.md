---
layout: post
title:  How to install Shout on Uberspace
date:   2014-10-12 12:00:00
type: post
---

[Shout](http://shout-irc.com/) ist ein self-hosted IRC Client. Das tolle an Shout ist, dass man "Always connected" ist und somit keine Konversation in seinen Lieblingschannels verpasst. Eine Live-Demo des Clients gibt es [hier](http://demo.shout-irc.com/).

Ich selbst nutzte IRC selten, da ich keinen passenden Client fand der "Alyways connected" war. Mit Shout habe ich das nun gelöst.

![Shout in Aktion]({{ site.url }}/img/posts/shout-on-uberspace/client.png)

> Die folgende Anleitung gilt nur für den Hoster [Uberspace](http://uberspace.de). Ich übernehme keine Haftung, falls ihr euren Server irgendwie zerschiesst.

##1. Uberspace-Server vorbereiten

[Shout](https://github.com/erming/shout) läuft wie gesagt mit Node. Daher ist es wichtig zuerst node.js auf eurem Uberspace korrekt einzurichten. Das geht ganz einfach, indem ihr eure eigene `.npmrc` anlegt. [Zum Uberspace Wiki Eintrag dazu](https://wiki.uberspace.de/development:nodejs?s[]=node#npm).

{% highlight bash %}
cat > ~/.npmrc <<__EOF__
prefix = $HOME
umask = 077
__EOF__
{% endhighlight %}

##2. Shout installieren

Weiter gehts mit dem installieren von Shout:

{% highlight bash %}
npm install -g shout
{% endhighlight %}

##3. Shout konfigurieren

Sobald nun alles installiert ist geht es um das Konfigurieren von Shout. In eurer Shell öffnet ihr das Config File mit `shout config`.
Ich empfehle euch folgende Einstellungspunkte anzupassen:

- public: `false` wenn nur ihr den Client nutzen wollt
- port: Ein Wert grösser als 61000
- defaults: Hier könnt ihr die Standard Channels und Nicknames anpassen

###3.1. User anlegen

Falls ihr in den Einstellungen definiert habt, dass nur ihr allein oder eine Hand von Auserwählten den Client nutzen wollt, dann müsst ihr zusätzlich noch `shout add <name>` ausführen. Dadurch wird der Client mit Username und Passwort geschützt.

##4. Port freischalten lassen

Ich hoffe ihr habt euch den Port gemerkt?  
Nun müsst ihr euch beim netten Uberspace Support genau diesen Port freischalten lassen. Klappt super via [Tweet](https://twitter.com/ubernauten) oder [Email](mailto:hallo@uberspace.de). Vergesst nicht euren Uberspace-Namen zu erwähnen.
In der Regel dauert dass keine 2 Stunden und der Port ist freigeschaltet.

##5. .htaccess erstellen

Während ihr auf eure Portfreischaltung wartet, könnt ihr noch eure .htaccess Datei anpassen / erstellen. Ich habe Shout auf einer Subdomain (Bsp.: shout.domain.de)  eingerichtet.

Der Inhalt der .htaccess-Datei müsste so aussehen (Port 61000 natürlich anpassen):

{% highlight apache %}
RewriteEngine On
RewriteRule ^(.*) http://localhost:61000/$1 [P]
{% endhighlight %}

##6. Service einrichten

Shout würde man nun mit `shout` in eurerer Konsole starten. Sobald ihr aber die Shell wieder schliesst, ist auch Shout weg. Um das Problem zu lösen, erstellt ihr nun einen neuen Service:

{% highlight bash %}
uberspace-setup-service shout-irc shout
{% endhighlight %}

`shout-irc` ist der Servicename; `shout` der der Befehl.

Falls der Service nicht automatisch startet, führt ihr noch den folgenden Befehlt aus.

{% highlight bash %}
svc -u ~/service/shout-irc
{% endhighlight %}

##7. Profit

Das wars auch schon. Jetzt solltet ihr unter eurer gesetzten Domain (shout.domain.de) euren Web-IRC Client finden.