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

/**
 * Plugin:
 * this module exports the plugin as a function.
 * @module plugin
 */

const fp = require('fastify-plugin')
const pn = require('node:path')
const fs = require('node:fs')

const iconNameDefault = 'favicon.ico'

/**
 * Plugin implementation.
 *
 * @param {!object} fastify Fastify instance
 * @param {!object} options plugin configuration options
 * <ul>
 *     <li>path (string, default `__dirname`) for the folder containing the icon,</li>
 *     <li>name (string, default 'favicon.ico') for favicon file name,</li>
 *     <li>maxAge (number, default 86400) for cache duration in seconds for the image,</li>
 * </ul>
 * @param {!function} done callback, to call as last step
 *
 * @namespace
 */
function fastifyFavicon (fastify, options, done) {
  const {
    path = __dirname,
    name = iconNameDefault,
    maxAge = 86400
  } = options

  ensureIsString(path, 'iconPath')
  ensureIsString(name, 'iconName')
  ensureIsInteger(maxAge, 'maxAge')

  const icon = pn.join(path, name)

  fs.readFile(icon, (err, faviconFile) => {
    if (err) {
      if (err.code === 'ENOENT') {
        done(new Error(`fastify-favicon: ${icon} not found`))
        return
      }

      done(new Error(`fastify-favicon: Could not load ${icon}`))
      return
    }

    fastify.get(`/${name}`, faviconRequestHandler(faviconFile))
    done()
  })

  /**
   * Factory for the request handler for the favicon.
   *
   * @param {!object} file the icon file to send in the response
   * @return {function} the handler function, preconfigured with plugin settings and the file to send
   *
   * @inner
   */
  function faviconRequestHandler (file) {
    const cacheHeader = `max-age=${maxAge}`
    return function handler (_fastifyRequest, fastifyReply) {
      fastifyReply
        .header('cache-control', cacheHeader)
        .type('image/x-icon')
        .send(file)
    }
  }
}

// utility functions

function ensureIsString (arg, name) {
  if (arg !== null && typeof arg !== 'string') {
    throw new TypeError(`The argument '${name}' must be a string, instead got a '${typeof arg}'`)
  }
}
function ensureIsInteger (arg, name) {
  if (arg !== null && typeof arg !== 'string' && Number.isFinite(arg) === false && Number.isInteger(arg) === false) {
    throw new TypeError(`The argument '${name}' must be an integer`)
  }
}

module.exports = fp(fastifyFavicon, {
  fastify: '5.x',
  name: 'fastify-favicon'
})
