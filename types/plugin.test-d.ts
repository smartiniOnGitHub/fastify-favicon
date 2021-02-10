import fastify from 'fastify'
import fastifyFavicon, { FastifyFaviconOptions } from './plugin'
import { expectAssignable } from 'tsd'

const app = fastify()
const options: FastifyFaviconOptions = {
  path: 'blah/blah/blah',
  name: 'icon.ico'
}
app.register(fastifyFavicon, options)

app.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`Server listening on '${address}' ...`)
})

expectAssignable<FastifyFaviconOptions>({})
expectAssignable<FastifyFaviconOptions>({
  path: 'blah/blah/blah',
  name: 'icon.ico'
})
