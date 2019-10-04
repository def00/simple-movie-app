import {body, check} from 'express-validator'
import Movie from '../models/movie'

export default [
  check('email').isEmail().isLength({min: 1, max: 255}),
  check('author').isString().isLength({min: 1, max: 255}),
  check('comment').isString().isLength({min: 1}),
  check('movie_id').isNumeric(),
  body('movie_id').custom(async (id) => {
    if (!id) {
      throw 'movie_id must not be empty'
    }
    const movie = await Movie.query().findById(id)
    if (!movie) {
      throw 'Movie not found in DB'
    }
    return movie
  })
]
