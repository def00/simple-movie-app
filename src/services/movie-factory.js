export default class {
  constructor(repository) {
    this.repository = repository
  }

  async create(movieResponse) {
    // todo validation
    return this.repository.create(movieResponse.Title, movieResponse.Year, movieResponse.Plot, movieResponse.Genre, movieResponse.Country)
  }
}
