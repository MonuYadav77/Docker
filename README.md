# Node.js Containerized Application

This project is a simple Node.js application containerized using Docker. It uses Express.js to serve a basic API endpoint.

## Features

- Express.js server
- Docker containerization
- Simple API endpoint (`/`)

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine

### Build the Docker Image

```sh
docker build -t nodejs-containerized-app .
```

### Run the Docker Container

```sh
docker run -p 8000:8000 nodejs-containerized-app
```

The server will be accessible at [http://localhost:8000](http://localhost:8000).

## API Endpoint

- `GET /`  
  Returns a JSON message confirming the app is running.

## Project Structure

```
docker-node/
├── Dockerfile
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

