export default class {
  constructor (model) {
    this.model = model
  }

  async create(title, year, plot, genre, country, imdbID) {
    return this.model.query().insert({
      title, year, plot, genre, country, imdbID
    })
  }

  async listAll () {
    return this.model.query()
  }

  async existsInDb (imdbID) {
    return this.model.query().where('imdbID', imdbID)
  }
}
