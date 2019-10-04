import assert from 'assert'
import sinon from 'sinon'
import CommentsRepository from '../../repositories/comments-repository'
import Comment from '../../models/comment'

describe('comments repository test', async () => {
  const repository = new CommentsRepository(Comment)
  const queryMockService = {
    async insert() {},
    async joinRelation() {}
  }


  it('should check if create function was called', async () => {
    const mock = sinon.mock(Comment)
    const queryMock = sinon.mock(queryMockService)

    mock.expects("query").returns(queryMockService).once()
    queryMock.expects("insert").once()
    await repository.create()
    mock.verify();
    mock.restore()
    queryMock.restore()
  })

  it('should check if list function was called', async () => {
    const mock = sinon.mock(Comment)
    const queryMock = sinon.mock(queryMockService)

    mock.expects("query").returns(queryMockService).once()
    queryMock.expects("joinRelation").withArgs('movie').once()
    await repository.listAll()
    mock.verify();
    mock.restore()
    queryMock.restore()
  })
})
