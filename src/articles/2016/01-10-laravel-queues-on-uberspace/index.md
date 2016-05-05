---
title:  Laravel Queues on Uberspace
date:   2016-01-10 12:00
accent: '#1f9bde'
---

Back in 2015 I've rewritten ImguBox. The old version didn't have any tests nor a well built foundation. I used Queues, but in my opinion not in the right way. I used [Irons Push Queues](http://dev.iron.io/mq/reference/push_queues/) which got removed from the Laravel Core in version 5.* and created a high load on the server (You can  DDOS yourself!).
I knew there where other solutions like Beanstalk or AWS but I wanted to keep the tech-stack as small as possible. So I used Laravels `database` Queue Driver. Queues are stored in a local database table any processed by the Laravel application itself through `php artisan queue:work`. But how can I trigger the `queue:work` command on my host? Uberspace doesn't allow me to install supervisor but thankfully we can use [Daemontools](https://wiki.uberspace.de/system:daemontools).

## Prepare your server

Use the following command to create your own `~/service` folder. (Skip this step if you're already used daemons on your server)

```
uberspace-setup-svscan 
```

## Create the skripts
First you need to create a skript which is exceuted by the daemon. I collect all my daemon-scripts in `~/etc/` and prefix them with `run-`.
So let's create the file `~/etc/run-acme-worker` and store the following script in it. Check the command near `exec`, you have to adjust it to your own project!

```
#!/bin/sh

# These environment variables are sometimes needed by the running daemons
export USER=YOUR_UBERSPACE_NAME
export HOME=/home/YOUR_UBERSPACE_NAME

# Include the user-specific profile
source $HOME/.bash_profile

# Now let's go!
exec /package/host/localhost/php-5.6.6/bin/php /var/www/virtual/$USER/html/acme-project/artisan queue:work database --queue=high,low --daemon  2>&1
```

## Link your service
Now you can link your new worker with daemontools. Uberspace provides a neat little helper for this.

```
uberspace-setup-service run-acme-worker ~/etc/run-acme-worker
```

## Start / Restart / Stop your Laravel Worker

Now you can start, restart or stop your worker with the following commands:

- Start: `svc -u ~/service/run-acme-worker`
- Stop: `svc -d ~/service/run-acme-worker`
- Restart: `svc -du ~/service/run-acme-worker`

