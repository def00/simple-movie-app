import express from 'express'
import request from 'request-promise-native'
import Movie from '../models/movie'
import MoviesSearch from '../services/movies-search'
import MovieFactory from '../services/movie-factory'
import movieSerializer from '../services/serializers/movie-serializer'
import serializer from '../services/serializers/serializer'
import MoviesRepository from '../repositories/movies-repository'
const router = express.Router()
const movieRepository = new MoviesRepository(Movie)
const movieFactory = new MovieFactory(movieRepository)

/* GET movies listing. */
router.get('/', async (req, res) => {
  try {
    return res.json(await serializer(await movieRepository.listAll(), movieSerializer))
  } catch (error) {
    return res.status(500).json(error)
  }
})

/* POST search for movies */
router.post('/', async (req, res) => {
  try {
    const movieData = await new MoviesSearch(request).search(req.body.query)
    if (movieData) {
      if (await movieFactory.create(movieData)) {
        return res.status(201).send()
      }
    }
  } catch (error) {
    return res.status(500).json(error.error)
  }
  // the movie already exists in db
  return res.status(409).json('The movie is already in our db')
})

export default router
