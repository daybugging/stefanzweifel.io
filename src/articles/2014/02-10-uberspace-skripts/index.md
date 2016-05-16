---
title:  Uberspace Scripts
date:   2014-02-10 20:50
---

> TL;DR: Praktische Sammlung von uberspace-Skripts gibts auf [Github](https://github.com/stefanzweifel/uberspaceScripts).

Kennt ihr [Uberspace](http://uberspace.de)? Nein? Das ist wohl der beste Hoster, wenn ihr auch gerne mal an der Shell arbeitet.

Nun habe ich meinen Uberspace seit einigen Wochen. Der alte Wordpress-Blog ist fast vollständing im neuen Ghost-Blog integriert und auch sonst laufen andere Projekte ziemlich flüssig.

Nun habe ich mir einige Skripts geschrieben bzw. zusammengesucht, die einfach nützlich sind :)

### Backup zu externem Server
Obwohl jeder Uberspace jeden Tag [gesichert](https://uberspace.de/dokuwiki/system:backup)  wird, möchte ich mein eigenes Backup haben.
Daher habe ich das Original Skript von [gehaxelt.in](http://www.gehaxelt.in/blog/ueberspace-backupscript/) etwas angepasst.
So kommt das gezippte File auf mein NAS.


### Domain und Projekt-Ordner erstellen

Ich probiere immer wieder mal was aus. Und jedes mal von Hand die Domain anlegen? Nicht mit mir.

Via `sh createProject.sh SUBDOMAIN` oder `sh deleteProject.sh SUBDOMAIN` wird eine neue Uberspace-Domain und gleichzeitig noch ein Ordner im HTML Root angelegt. Inklusive korrektem Symlink.

Alle Skripts gibts auf [Github](https://github.com/stefanzweifel/uberspaceScripts). Bin kein Weltmeister in Bash-Scripts, aber für mich reichts :)
