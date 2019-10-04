import sinon from 'sinon'
import MoviesRepository from '../../repositories/movies-repository'
import Movie from '../../models/movie'

describe('Should check MoviesRepository', async () => {
  const repository = new MoviesRepository(Movie)
  const queryMockService = {
    async insert() {},
    async where() {}
  }

  it('check calling create method', async () => {
    const mock = sinon.mock(Movie)
    const queryMock = sinon.mock(queryMockService)

    mock.expects("query").returns(queryMockService).once()
    queryMock.expects("insert").once()
    await repository.create()
    mock.verify();
    mock.restore()
    queryMock.restore()
  })

  it('check calling listAll method', async () => {
    const mock = sinon.mock(Movie)

    mock.expects("query").returns(queryMockService).once()
    await repository.listAll()
    mock.verify();
    mock.restore()
  })

  it('check calling existsInDb method', async () => {
    const mock = sinon.mock(Movie)
    const queryMock = sinon.mock(queryMockService)
    mock.expects("query").returns(queryMockService).once()
    queryMock.expects("where").once()
    await repository.existsInDb(null)
    mock.verify();
    mock.restore()
  })
})
