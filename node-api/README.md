# node-api Hexagonal

## Available Scripts

In the project directory, you can run:

### `docker-compose up`

and automatically start the server.
or run manually with:

### `npm install`

### `npm start`

### `npm test`

## Available endpoints

| Method | Path                                                   | Description                                                                 |
| ------ | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| GET    | http://localhost:3001/files/data                       | Lista parseada de datos                                                     |
| GET    | http://localhost:3001/files/data?fileName=FileName.csv | Filtrar por nombre del archivo                                              |
| GET    | http://localhost:3001/files/list                       | lista de archivos disponibles tal cual como se la muestra en el API Externa |
