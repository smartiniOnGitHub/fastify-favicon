import { expectAssignable } from 'tsd'
import fastifyFavicon, { FastifyFaviconOptions } from './plugin'
import fastify from 'fastify'

const app = fastify()
app.register(fastifyFavicon, { path: 'blah/blah/blah' })

expectAssignable<FastifyFaviconOptions>({})
expectAssignable<FastifyFaviconOptions>({ path: 'blah/blah/blah' })
