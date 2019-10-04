'user strict'

import API_KEY from '../../config/api-key'

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export default class {
  constructor(request) {
    this.request = request
  }

  async search(query, page = 0) {
    const movies = await this.request({
      url: API_URL + `&t=${query}`,
      json: true
    })
    return movies
  }
}

