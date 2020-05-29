import * as fastify from 'fastify';
import * as http from 'http';

interface FastifyFaviconOptions {
    path?: string;
}

declare const fastifyFavicon: fastify.Plugin<
    http.Server,
    http.IncomingMessage,
    http.ServerResponse,
    FastifyFaviconOptions
>;

export = fastifyFavicon;