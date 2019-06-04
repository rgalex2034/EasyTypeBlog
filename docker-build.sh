export FILES="-f docker-compose.yml -f docker-compose.dev.yml"
export COMPOSE_CMD="docker-compose $FILES"
$COMPOSE_CMD build
$COMPOSE_CMD run --rm web npm install
$COMPOSE_CMD run --rm web npm i @types/node
$COMPOSE_CMD run --rm web npm run build
$COMPOSE_CMD up --no-start
$COMPOSE_CMD start
