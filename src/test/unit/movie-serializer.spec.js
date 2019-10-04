import movieSerializer from '../../services/serializers/movie-serializer'
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import createMovie from './data-providers/create-movie'
import movieData from './data-providers/movie'

chai.use(chaiAsPromised)

describe('Should test movieSerailizer', async () => {
  const movie = createMovie(movieData)

  it('check throwing error when from arguments provided', async () => {
    const wrongInput = {}
    await chai.expect(movieSerializer(wrongInput)).to.be.rejectedWith(Error)
  })

  it('check returning value when proper arguments provided', async () => {
    const data = await movieSerializer(movie)

    chai.expect(data.id).to.be.eq(movieData.id)
    chai.expect(data.title).to.be.eq(movieData.title)
    chai.expect(data.year).to.be.eq(movieData.year)
    chai.expect(data.plot).to.be.eq(movieData.plot)
    chai.expect(data.genre).to.be.eq(movieData.genre)
    chai.expect(data.year).to.be.eq(movieData.year)
    chai.expect(data.country).to.be.eq(movieData.country)
  })

  it('check returning value when proper arguments provided with deep = false', async () => {
    const data = await movieSerializer(movie, false)

    chai.expect(data.title).to.be.eq(movieData.title)
    chai.expect(data.year).to.be.eq(movieData.year)
    chai.expect(data.id).to.be.an('undefined')
    chai.expect(data.plot).to.be.an('undefined')
    chai.expect(data.genre).to.be.an('undefined')
    chai.expect(data.country).to.be.an('undefined')
  })
})
