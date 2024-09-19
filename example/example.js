/*
 * Copyright 2018-2024 the original author or authors.
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

const fastify = require('fastify')()

fastify.register(require('..'), {
  // some examples of custom path (optional)
  // path: 'test' // relative to project root // ok
  // path: './test' // relative to project root // ok
  // path: '../fastify-favicon/test' // relative to project root with folder change // ok
  // path: '../fastify-favicon/test/' // relative to project root with folder change and final slash // ok
  // path: '/test' // absolute but dependent on project root // no, doen't work
  // path: '/work/fastify-favicon/test' // absolute (full path) // ok, but not recommended
  // path: '../fastify-favicon/test-bad' // example with bad path, to let the plugin write a warning in logs (but logs must be enabled in Fastify options)
})

// example to handle a sample home request to serve a static page, optional here
fastify.get('/', function (req, reply) {
  const path = require('node:path')
  const scriptRelativeFolder = path.join(__dirname, path.sep)
  const fs = require('node:fs')
  const stream = fs.createReadStream(path.join(scriptRelativeFolder, 'home.html'))
  reply.type('text/html; charset=utf-8').send(stream)
})

fastify.listen({ port: 3000, host: 'localhost' }, (err, address) => {
  if (err) throw err
  console.log(`Server listening on '${address}' ...`)
})

fastify.ready(() => {
  const routes = fastify.printRoutes()
  console.log(`Available Routes:\n${routes}`)
})
