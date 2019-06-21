# EasyTypeBlog
An easy to use, simple, and clean blog CMS.

## Description
This projects aims to be a blog using TypeScript in Node.js, express as the request server handler,
and handlebars for the template system.

For now, I've not decided which kind of technology use for persistence, but will be something small as SQLite or MongoDB.

## Requirements
To install this application with the default process, you must have installed
`docker` and `docker-compose` on your system.

## Installation
If you already have a version running, execute this command:
```
docker-compose build
```
To install the application, then run:
```
docker-compose up --no-start
docker-compose start
```
This will create the containers and then start them for you in the background.

### Development
To build the application for development purposes, run:
```sh
./docker-build.sh
```
This will create a docker container. You will see the list of existing containser with `docker ps -a`.

It will attach the current project folder as a volume, update `node_modules`, compile the application,
and left the container running in backround.

## Configuration
We use a file called `easyblog.conf.json` for configuration purposes.

It can be located on three different places:
```
/etc/easyblog.conf.json #System wide
~/.config/easyblog.conf.json #Per user
./easyblog.conf.json #Local for application
```
The last one is the root project folder.

The files are loaded in this orders, overriding options for every previous file.
Meaning the the project folder file will override every other one,
up to `/etc` system wide location.

### Configuration option list
#### Server Options
- `server.bind_address`: The adress that the application will be listening for connections.
- `server.port`: The port that the application will be listenting for connections.
