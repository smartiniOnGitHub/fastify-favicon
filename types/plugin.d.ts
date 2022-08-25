/// <reference types="node" />

import { FastifyPluginCallback } from 'fastify'

export interface FastifyFaviconOptions {
  path?: string;
  name?: string;
  maxAge?: number;
}

declare const fastifyFavicon: FastifyPluginCallback<FastifyFaviconOptions>
export default fastifyFavicon
