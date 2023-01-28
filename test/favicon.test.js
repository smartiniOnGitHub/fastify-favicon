/*
 * Copyright 2018-2023 the original author or authors.
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
const Fastify = require('fastify')

test('default favicon does not return an error, but a good response (200) and some content', async (t) => {
  t.plan(5)

  const defaultPath = './src'
  const fastify = Fastify()
  t.teardown(() => { fastify.close() })

  fastify.register(require('..'), {
    path: defaultPath,
    maxAge: 1337
  }) // configure this plugin with its default options

  await fastify.listen({ port: 0 })

  const response = await fastify.inject({
    method: 'GET',
    timeout: 2000,
    url: '/favicon.ico'
  })

  t.equal(response.statusCode, 200)
  t.equal(response.headers['cache-control'], 'max-age=1337')
  t.equal(response.headers['content-type'], 'image/x-icon')

  // add check on file contents, or at least file size ...
  const fs = require('node:fs')
  const contents = fs.readFileSync(`${defaultPath}/favicon.ico`)
  t.ok(contents)
  t.strictSame(contents.length, response.body.length)
})

test('return a favicon configured in a custom path', async (t) => {
  t.plan(5)

  const pathSample = './test'
  const fastify = Fastify()

  t.teardown(() => { fastify.close() })

  await fastify.register(require('../'), {
    path: pathSample
  })

  await fastify.listen({ port: 0 })

  const response = await fastify.inject({
    method: 'GET',
    timeout: 2000,
    url: '/favicon.ico'
  })

  t.equal(response.statusCode, 200)
  t.equal(response.headers['cache-control'], 'max-age=86400')
  t.equal(response.headers['content-type'], 'image/x-icon')

  // add check on file contents, or at least file size ...
  const fs = require('node:fs')
  const contents = fs.readFileSync(`${pathSample}/favicon.ico`)
  t.ok(contents)
  t.strictSame(contents.length, response.body.length)
})
