import fastify from 'fastify'
// import fastifyFavicon, { FastifyFaviconOptions } from '..'
import fastifyFavicon from '..'

const app = fastify()

app.register(fastifyFavicon)
