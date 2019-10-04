import {Model} from 'objection'
import knex from '../../config/database'
import Comment from './comment'

Model.knex(knex)

class Movie extends Model {
  static get tableName() {
    return 'movies'
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          to: 'movies.id',
          from: 'comments.movie_id'
        }
      }
    }
  }

  async comments() {
    return this.$relatedQuery('comments')
  }
}

export default Movie
