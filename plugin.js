'use strict'

const fp = require('fastify-plugin')

function defaultFaviconHandler (req, reply) {
  const fs = require('fs')
  const stream = fs.createReadStream('favicon.ico')
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
