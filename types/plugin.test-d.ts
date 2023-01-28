import fastify from 'fastify'
import fastifyFavicon, { FastifyFaviconOptions } from '..'
import { expectAssignable } from 'tsd'

const app = fastify()
const options: FastifyFaviconOptions = {
  path: 'blah/blah/blah',
  name: 'icon.ico'
}
app.register(fastifyFavicon, options)

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server listening on '${address}' ...`)
})

expectAssignable<FastifyFaviconOptions>({})
expectAssignable<FastifyFaviconOptions>({
  path: 'blah/blah/blah',
  name: 'icon.ico',
  maxAge: 1
})
