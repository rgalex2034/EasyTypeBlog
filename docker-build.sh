docker-compose build
docker-compose run --rm web npm install
docker-compose run --rm web npm i @types/node
docker-compose run --rm web npm run build
docker-compose up --no-start
