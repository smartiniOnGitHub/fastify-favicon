/// <reference types="node" />

import { FastifyPlugin } from 'fastify'

export interface FastifyFaviconOptions {
  path?: string
}

declare const fastifyFavicon: FastifyPlugin<FastifyFaviconOptions>
export default fastifyFavicon
