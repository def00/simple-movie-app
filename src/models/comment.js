import {Model} from 'objection'
import knex from '../../config/database'
import Movie from './movie'
Model.knex(knex)

class Comment extends Model {
  static get tableName() {
    return 'comments'
  }

  static get relationMappings() {
    return {
      movie: {
        relation: Model.BelongsToOneRelation,
        modelClass: Movie,
        join: {
          from: 'movies.id',
          to: 'comments.movie_id'
        }
      }
    }
  }

  async movie() {
    return this.$relatedQuery('movie')
  }
}

export default Comment
