'use strict'
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
  return res.json(await serializer(await movieRepository.listAll(), movieSerializer))
})

/* POST search for movies */
router.post('/', async (req, res) => {
  const movieData = await new MoviesSearch(request).search(req.body.query)
  if (movieData) {
    await movieFactory.create(movieData)
  }
  return res.status(201).send()
})

export default router
