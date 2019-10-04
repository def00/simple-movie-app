import dotenv from 'dotenv'
dotenv.config()

const env = process.env.NODE_ENV || 'development'
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile[env])

export default knex
