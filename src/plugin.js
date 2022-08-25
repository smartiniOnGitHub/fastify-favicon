/*
 * Copyright 2018-2022 the original author or authors.
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
const pn = require('path')
const fs = require('fs')

const iconNameDefault = 'favicon.ico'

function fastifyFavicon (fastify, options, next) {
  const {
    path = __dirname,
    name = iconNameDefault
  } = options

  ensureIsString(path, 'iconPath')
  ensureIsString(name, 'iconName')

  const icon = pn.join(path, name)

  fs.readFile(icon, (err, faviconFile) => {
    if (err) {
      if (err.code === 'ENOENT') {
        next(new Error(`fastify-favicon: ${icon} not found`))
        return
      }

      next(new Error(`fastify-favicon: Could not load ${icon}`))
      return
    }

    fastify.get(`/${name}`, faviconRequestHandler(faviconFile))
    next()
  })

  function faviconRequestHandler (file) {
    return function handler (_fastifyRequest, fastifyReply) {
      fastifyReply.type('image/x-icon').send(file)
    }
  }
}

function ensureIsString (arg, name) {
  if (arg !== null && typeof arg !== 'string') {
    throw new TypeError(`The argument '${name}' must be a string, instead got a '${typeof arg}'`)
  }
}

module.exports = fp(fastifyFavicon, {
  fastify: '4.x',
  name: 'fastify-favicon'
})
