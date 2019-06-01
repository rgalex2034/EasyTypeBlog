docker-compose -p easyblog build
docker run --rm --volume=$(pwd):/app easyblog_web npm install
docker run --rm --volume=$(pwd):/app easyblog_web npm i @types/node
docker run --rm --volume=$(pwd):/app easyblog_web npm run build
docker-compose -p easyblog up --no-start
