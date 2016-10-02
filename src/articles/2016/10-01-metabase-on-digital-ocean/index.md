---
title: Install Metabase on a Laravel Forge provisioned DigitalOcean Droplet
date: 2016-10-01 19:00
---

Recently I discovered [Metabase](http://metabase.com) an open source business intelligence tool. At work I had to create a lot of statistics in the last months and I always strougled to create an easy to use interface for my coworkers and to reduce the workload for me to build all those database queries. Metabase was the perfect solution for this problem.

Here's a short step by step guide on how you can install Metabase on a DigitalOcean Droplet. (The Droplet in this tutorial is being created and provisioned by [Laravel Forge](http://forge.laravel.com). If you don't use Forge create the Droplet through the DigitalOcean Website)

## 1. Choose Droplet size

I recommend the "20$ per Month" Droplet (2GB RAM, 40GB SSD, 2 Core Processor).

## 2. Install Docker

DigitalOcean already has a great tutorial on how to install docker on your new Droplet. Just follow [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04).

## 3. Install Metabase Docker Image

Next we install the latet Docker Image from Metabase. By default all Metabase settings are stored in the docker image. If you ever upate the Docker image or delete the image, you loose all your settings and "Questions" (Queries).
That's why we use MySQL as our "settings storage". Create a local database called `metabase` and use the following code to install and start Metabase. Replace `<username>` and `<password>` with your database credentials and you're ready to go.

```shell
docker run -d -p 3000:3000 \
  -e "MB_DB_TYPE=mysql" \
  -e "MB_DB_DBNAME=metabase" \
  -e "MB_DB_PORT=3306" \
  -e "MB_DB_USER=<username>" \
  -e "MB_DB_PASS=<password>" \
  -e "MB_DB_HOST=localhost" \
  --name metabase metabase/metabase
```

You can find more information about the installation of Metabase [here](http://www.metabase.com/docs/v0.19.3/operations-guide/running-metabase-on-docker.html)


That's it! Youre Metabase installation is now running on Port 3000. You should now be able to open Metabase in your browser and follow the final setup steps.
Then just add your data sources and you can beginn analyze your data.