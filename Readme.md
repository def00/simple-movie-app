# Simple movies API

### Installation
1. Run docker-compose up to start docker
2. exec `npm run db:migrate` in your docker container

## Endpoints
1. GET http://localhost:3000/movies
2. POST http://localhost:3000/movies post params: 
  - query: String - Movie Title
3. GET http://localhost:3000/comments
4. POST http://localhost:3000/comments post params:
  - author: String - name
  - email: String - e-mail address
  - comment: Text - comment 
  - movie_id: Int - id of a movie you want to comment

## Tests
exec `npm test` in you docker container
