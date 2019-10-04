import commentSerializer from '../../services/serializers/comment-serializer'
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import createComment from './data-providers/create-comment'
import commentData from './data-providers/comment'

chai.use(chaiAsPromised)

describe('Should test commentSerailizer', async () => {
  const comment = createComment(commentData)

  it('check throwing error when from arguments provided', async () => {
    const wrongInput = {}
    await chai.expect(commentSerializer(wrongInput)).to.be.rejectedWith(Error)
  })

  it('check returning value when proper arguments provided', async () => {
    const data = await commentSerializer(comment)
    chai.expect(data.id).to.be.eq(commentData.id)
    chai.expect(data.author).to.be.eq(commentData.name)
    chai.expect(data.comment).to.be.eq(commentData.comment)
    chai.expect(data.name).to.be.an('undefined')
    chai.expect(data.email).to.be.an('undefined')
  })

  it('check returning value when proper arguments provided with deep = false', async () => {
    const data = await commentSerializer(comment, false)
    chai.expect(data.author).to.be.eq(commentData.name)
    chai.expect(data.comment).to.be.eq(commentData.comment)
    chai.expect(data.name).to.be.an('undefined')
    chai.expect(data.email).to.be.an('undefined')
    chai.expect(data.id).to.be.an('undefined')
  })
})
