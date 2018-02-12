'use strict'

const fastify = require('fastify')()

fastify.register(require('../plugin'), {
})

fastify.listen(3000, '0.0.0.0', (err) => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})

fastify.ready(() => {
  const routes = fastify.printRoutes()
  console.log(`Available Routes:\n${routes}`)
})
