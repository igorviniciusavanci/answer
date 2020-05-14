## Development environment

You will need Docker and Docker-compose.

## Getting Started

```sh
docker-compose build
```

```sh
docker-compose up
```

## [API Documentation](https://documenter.getpostman.com/view/1702556/SzmiXGGr)

## Front-end

You can use this [project](https://github.com/igorviniciusavanci/answer-front-end)

## Run Tests
First of all you need up containers. To attach in container:
```sh
docker-compose exec server-node bash
```
In bash of container run:
```sh
yarn test
```
## License

[MIT](https://github.com/igorviniciusavanci/answer/blob/master/LICENSE)
