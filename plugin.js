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

const fp = require('fastify-plugin')

function defaultFaviconHandler (req, reply) {
  const path = require('path')
  const scriptRelativeFolder = path.join(__dirname, path.sep)
  const fs = require('fs')
  const stream = fs.createReadStream(path.join(scriptRelativeFolder, 'favicon.ico'))
  reply.type('image/x-icon').send(stream)
}

function defaultFaviconPlugin (fastify, options, next) {
  fastify.get('/favicon.ico', defaultFaviconHandler)
  next()
}

module.exports = fp(defaultFaviconPlugin, {
  fastify: '>=0.43.0',
  name: 'fastify-favicon'
})
