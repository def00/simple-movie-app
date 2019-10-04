process.env.NODE_ENV = 'test'

import server from '../../app'
import chai from 'chai'
import chaihttp from 'chai-http'
chai.use(chaihttp)


describe('Should check movies routes', async () => {
  it('check GET /movies reponse', async () => {
    const request = chai.request(server)
    const response = await request.get('/movies')
    chai.expect(response.status).to.be.eq(200)
    chai.expect(response.body).to.an('array')
    chai.expect(response.body).to.length(3)
  })

})
