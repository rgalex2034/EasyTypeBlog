# EasyTypeBlog
An easy to use, simple, and clean blog CMS.

## Description
This projects aims to be a blog using TypeScript in Node.js, express as the request server handler,
and handlebars for the template system.

For now, I've not decided which kind of technology use for persistence, but will be something small as SQLite or MongoDB.

## Installation
To build the application on a docker container, run:
```sh
./docker-build.sh
```
This will create a docker container. You will see the list of existing containser with `docker ps -a`.

## Run
Once installed, you can start the container with this command:
```
docker-compose start
```
