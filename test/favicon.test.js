/*
 * Copyright 2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict'

const test = require('tap').test
const request = require('request')
const Fastify = require('fastify')

test('default favicon does not return an error, but a good response (200) and some content', (t) => {
  t.plan(6)
  const fastify = Fastify()
  fastify.register(require('../')) // configure this plugin with its default options

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
      // add check on file contents, or at least file size ...
      const fs = require('fs')
      const contents = fs.readFileSync('favicon.ico')
      // optional, add some assertions with standard Node.js assert statements, as a sample
      const assert = require('assert')
      assert(contents !== null)
      t.ok(contents)
      t.strictSame(contents.length, body.length)

      fastify.close()
    })
  })
})

test('return a favicon configured in a custom path', (t) => {
  t.plan(6)
  const path = './test'
  const fastify = Fastify()
  fastify.register(require('../'), {
    path: path
  })

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
      // add check on file contents, or at least file size ...
      const fs = require('fs')
      const contents = fs.readFileSync(path + '/favicon.ico')
      // optional, add some assertions with standard Node.js assert statements, as a sample
      const assert = require('assert')
      assert(contents !== null)
      t.ok(contents)
      t.strictSame(contents.length, body.length)

      fastify.close()
    })
  })
})
