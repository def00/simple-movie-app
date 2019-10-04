export default class {
  constructor(model) {
    this.model = model
  }

  async create(author, email, comment, movieId) {
    await this.model.query().insert({
      name: author,
      email,
      comment,
      movie_id: movieId
    })
  }

  async listAll () {
    return this.model.query().joinRelation('movie')
  }
}
