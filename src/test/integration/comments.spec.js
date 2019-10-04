process.env.NODE_ENV = 'test'

import server from '../../app'
import chai from 'chai'
import chaihttp from 'chai-http'
chai.use(chaihttp)


describe('Should check comments routes', async () => {
  it('check GET /comments reponse', async () => {
    const request = chai.request(server)
    const response = await request.get('/comments')
    chai.expect(response.status).to.be.eq(200)
    chai.expect(response.body).to.an('array')
    chai.expect(response.body).to.length(4)
  })

  it('check POST /comments response with wrong post data', async () => {
    const request = chai.request(server)
    const response = await request.post('/comments').send({
      movie_id: 1,
      email: 'test',
      author: 'Test',
      comment: 'test'
    })

    chai.expect(response.status).to.be.eq(422)
  })

  it('check POST /comments response', async () => {
    const request = chai.request(server)
    const response = await request.post('/comments').send({
      movie_id: 1,
      email: 'test@example.org',
      author: 'Test',
      comment: 'test'
    })

    chai.expect(response.status).to.be.eq(201)
  })

  it('check GET /comments reponse after saving comment', async () => {
    const request = chai.request(server)
    const response = await request.get('/comments')
    chai.expect(response.status).to.be.eq(200)
    chai.expect(response.body).to.an('array')
    chai.expect(response.body).to.length(5)
  })

})
