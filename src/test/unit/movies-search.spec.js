import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import MovieSearch from '../../services/movies-search'
import sinon from 'sinon'
import assert from 'assert'

chai.use(chaiAsPromised)

describe('Should test MoviesSearch', async () => {
  it('check calling request', async () => {
    const spy = sinon.spy()
    const search = new MovieSearch(spy)
    await search.search("query")
    assert(spy.calledOnce)
  })
})
