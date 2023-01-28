/// <reference types="node" />

// import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions, FastifyRequest } from 'fastify'
import { FastifyPluginCallback } from 'fastify'

type FastifyFaviconPlugin = FastifyPluginCallback<NonNullable<fastifyFavicon.FastifyFaviconOptions>>

declare namespace fastifyFavicon {
  export interface FastifyFaviconOptions {
    /**
     * Override the path for the folder containing the favicon (default: '__dirname').
     */
    path?: string

    /**
     * Override the name for the file containing the favicon (default: 'favicon.ico').
     */
    name?: string

    /**
     * Override the cache duration in seconds for the image (default: 86400).
     */
    maxAge?: number
  }

  export const fastifyFavicon: FastifyFaviconPlugin
  export { fastifyFavicon as default }
}

declare function fastifyFavicon(
  ...params: Parameters<FastifyFaviconPlugin>
): ReturnType<FastifyFaviconPlugin>

export = fastifyFavicon
