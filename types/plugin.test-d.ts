import { expectAssignable } from 'tsd'
import fastifyFavicon, { FastifyFaviconOptions } from './plugin'
import fastify = require('fastify');

fastify().register(fastifyFavicon, { path: 'blah/blah/blah' })

expectAssignable<FastifyFaviconOptions>({})
expectAssignable<FastifyFaviconOptions>({ path: 'blah/blah/blah' })
