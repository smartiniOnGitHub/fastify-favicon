/// <reference types="node" />

import { FastifyPluginCallback } from 'fastify'

export interface FastifyFaviconOptions {
  path?: string
  name?: string
}

declare const fastifyFavicon: FastifyPluginCallback<FastifyFaviconOptions>
export default fastifyFavicon
