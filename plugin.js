'use strict'

const fp = require('fastify-plugin')

function defaultFaviconHandler (req, reply) {
// TODO: implement it ... wip
  // reply.type('image/x-icon').send('test content')
  const fs = require('fs')
  const stream = fs.createReadStream('favicon.ico', 'utf8')
  // reply.send(stream)
  reply.type('image/x-icon').send(stream)
  // TODO: check if set type('image/x-icon') ...
}

function defaultFaviconPlugin (fastify, options, next) {
  fastify.get('/favicon.ico', defaultFaviconHandler)
  next()
}

module.exports = fp(defaultFaviconPlugin, {
  fastify: '>=0.43.0',
  name: 'fastify-favicon'
})
