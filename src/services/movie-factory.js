export default class {
  constructor(repository) {
    this.repository = repository
  }

  async create(movieResponse) {
    const exists = await this.repository.existsInDb(movieResponse.imdbID)
    if (exists.length > 0) {
      return false
    }
    return this.repository.create(movieResponse.Title, movieResponse.Year, movieResponse.Plot, movieResponse.Genre, movieResponse.Country, movieResponse.imdbID)
  }
}
