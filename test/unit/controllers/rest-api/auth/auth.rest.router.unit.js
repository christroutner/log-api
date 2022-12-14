/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

// Local support libraries
// const adapters = require('../../../mocks/adapters')
// const UseCasesMock = require('../../../mocks/use-cases')
// const app = require('../../../mocks/app-mock')

const AuthRouter = require('../../../../../src/controllers/rest-api/auth')
let uut
let sandbox
const useCases = {}
const adapters = {}
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Auth-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    uut = new AuthRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new AuthRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating PostEntry REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new AuthRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attached REST API controllers.'
        )
      }
    })
  })
})
