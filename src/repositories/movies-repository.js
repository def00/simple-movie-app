export default class {
  constructor (model) {
    this.model = model
  }

  async create(title, year, plot, genre, country) {
    return this.model.query().insert({
      title, year, plot, genre, country
    })
  }

  async listAll () {
    return this.model.query()
  }
}
