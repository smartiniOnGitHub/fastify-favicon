import fastify = require('fastify');
import { expectAssignable } from 'tsd';
import fastifyFavicon, { FastifyFaviconOptions } from '../src/plugin';

fastify().register(fastifyFavicon, { path: "blah/blah/blah" });

expectAssignable<FastifyFaviconOptions>({});
expectAssignable<FastifyFaviconOptions>({ path: "blah/blah/blah" });