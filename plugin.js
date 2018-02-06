'use strict'

const fp = require('fastify-plugin')

function defaultFaviconHandler (req, reply) {
// TODO: implement it ... wip
  reply.code(200).send({ hello: 'world' })
}

function defaultFaviconPlugin (fastify, options, next) {
  fastify.get('/favicon.ico', defaultFaviconHandler)
  next()
}

module.exports = fp(noFaviconPlugin, {
  fastify: '>=0.43.0',
  name: 'fastify-favicon'
})
