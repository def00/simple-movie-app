import express from 'express'
import Comment from '../models/comment'
import commentSerializer from '../services/serializers/comment-serializer'
import validation from '../validation/comment'
import serializer from '../services/serializers/serializer'
import requestValidator from '../middleware/request-validator'
import CommentsRepository from '../repositories/comments-repository'
const router = express.Router()
const commentRepository = new CommentsRepository(Comment)

/* GET comments listing. */
router.get('/', async (req, res) => {
  try {
    return res.json(await serializer(await commentRepository.listAll(), commentSerializer))
  } catch (error) {
    return res.status(500).json(error)
  }
})

/* POST comment */
router.post('/', validation, requestValidator, async (req, res) => {
  try {
    await commentRepository.create(req.body.author, req.body.email, req.body.comment, req.body.movie_id)
    return res.status(201).send()
  } catch (error) {
    return res.status(500).json(error)
  }
})

export default router
