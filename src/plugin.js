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
const scriptRelativeFolder = pn.join(__dirname, pn.sep)
const fs = require('fs')

const iconNameDefault = 'favicon.ico'

function fastifyFavicon (fastify, options, next) {
  const {
    path = '',
    name = iconNameDefault
  } = options

  ensureIsString(path, 'iconPath')
  ensureIsString(name, 'iconName')

  fastify.get(`/${name}`, defaultFaviconHandler)
  const icon = pn.join(path, name)

  function defaultFaviconHandler (req, reply) {
    fs.readFile(icon, (err, data) => {
      let stream
      if (err && err.code === 'ENOENT') {
        fastify.log.warn(`Custom favicon '${icon}' not found, serving the default one`)
        stream = fs.createReadStream(pn.join(scriptRelativeFolder, iconNameDefault))
      } else {
        stream = fs.createReadStream(icon)
      }
      reply.type('image/x-icon').send(stream)
    })
  }

  next()
}

function ensureIsString (arg, name) {
  if (arg !== null && typeof arg !== 'string') {
    throw new TypeError(`The argument '${name}' must be a string, instead got a '${typeof arg}'`)
  }
}

module.exports = fp(fastifyFavicon, {
  fastify: '3.x',
  name: 'fastify-favicon'
})
