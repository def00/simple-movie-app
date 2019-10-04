import serializer from '../../services/serializers/serializer'
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

describe('Should test serializer function', async () => {
  it('check throwing invalid arguments exception', async () => {
    await chai.expect(serializer()).to.be.rejectedWith(Error)
  })

  it('check if serializer is returning a promise', async () => {
    await chai.expect(serializer([], () => {})).to.be.an('promise')
  })
})
