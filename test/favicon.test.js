'use strict'

const test = require('tap').test
const request = require('request')
const Fastify = require('fastify')

test('default favicon does not return an error, but a good response (200) and some content', (t) => {
  t.plan(4)
  const fastify = Fastify()
  fastify.register(require('../'))  // configure this plugin with its default options

  fastify.listen(0, (err) => {
    fastify.server.unref()
    t.error(err)
    const port = fastify.server.address().port

    request({
      method: 'GET',
      uri: `http://localhost:${port}/favicon.ico`
    }, (err, response, body) => {
      t.error(err)
      t.strictEqual(response.statusCode, 200)
      t.strictEqual(response.headers['content-type'], 'image/x-icon')
      // TODO: add check on file conmtents, or at least file size ...

      fastify.close()
    })
  })
})

// TODO: add test to check error code when returning a not-existing favicon ...

// TODO: add a test to return a favicon configured in a custom path (but provided here as example/test resources) ...
