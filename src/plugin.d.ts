import * as fastify from 'fastify';
import * as http from 'http';

export interface FastifyFaviconOptions {
    path?: string;
}

declare const fastifyFavicon: fastify.Plugin<
    http.Server,
    http.IncomingMessage,
    http.ServerResponse,
    FastifyFaviconOptions
>;

export default fastifyFavicon;