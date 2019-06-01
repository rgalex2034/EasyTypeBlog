docker-compose build
docker run --rm --volume=$(pwd):/app blog_web npm install
docker run --rm --volume=$(pwd):/app blog_web npm i @types/node
docker run --rm --volume=$(pwd):/app blog_web npm run build