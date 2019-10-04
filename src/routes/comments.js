'use strict'

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
  return res.json(await serializer(await commentRepository.listAll(), commentSerializer))
})

/* POST comment */
router.post('/', validation, requestValidator, async (req, res) => {
  await commentRepository.create(req.body.author, req.body.email, req.body.comment, req.body.movie_id)
  return res.status(201).send()
})

export default router
