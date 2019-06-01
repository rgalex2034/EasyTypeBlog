# EasyTypeBlog
An easy to use, simple, and clean blog CMS.

## Description
This projects aims to be a blog using TypeScript in Node.js, express as the request server handler,
and handlebars for the template system.

For now, I've not decided which kind of technology use for persistence, but will be something small as SQLite or MongoDB.

## Installation
To build and run this application as a docker container, run:
```sh
./docker-build.sh
docker-compose up
```
The first script will build the container image, then install the dependencies. Finally, `docker-compose up` will start the container.

## Run
Once installed, a docker container will be available for use.
To start it, just write:
```
docker start easyblog_web_1
```
