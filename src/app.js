import express from 'express'
import logger from 'morgan'
import moviesRouter from './routes/movies'
import commentsRouter from './routes/comments'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/movies', moviesRouter)
app.use('/comments', commentsRouter)

app.use(async (err, req, res) => {
  if (err) {
    res.status(400).json(err)
  }
  res.status(200).json(res)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json('Not found')
})

module.exports = app
