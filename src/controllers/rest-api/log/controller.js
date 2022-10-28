
// const LogsApiLib = require('../../../adapters/logapi')
// const logsApiLib = new LogsApiLib()

const parse = require('co-body')

const wlogger = require('../../../adapters/wlogger')

// let _this

class LogsApi {
  // constructor () {
  //   // _this = this
  //   // _this.logsApiLib = logsApiLib
  // }

  /**
   * @api {post} /log Parse and return the log files.
   * @apiPermission public
   * @apiName LogApi
   * @apiGroup Logs
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "data": "some test data" }' localhost:5001/log
   *
   * @apiParam {String} password Password (required)
   *
   * @apiSuccess {Array}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "username": "johndoe"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async writeLog (ctx) {
    try {
      console.log('ctx.request.body: ', ctx.request.body)

      // const data = ctx.request.body.data
      const data = await parse(ctx)
      console.log(`data: ${data}`)

      wlogger.info(`data: ${data}`)

      // console.log('entering getLogs()')

      ctx.body = {
        success: true
      }
    } catch (err) {
      if (err && err.message) {
        ctx.throw(422, err.message)
      } else {
        ctx.throw(500, 'Unhandled error')
      }
    }
  }
}

module.exports = LogsApi
