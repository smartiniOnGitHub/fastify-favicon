# fastify-favicon
Fastify Plugin to serve default favicon.

With this plugin, Fastify will have a route configured for `/favicon.ico` requests.


## Usage

```js
const fastify = require('fastify')()

// example without specifying options, searching favicon.ico from project root, otherwise returning a default favicon
fastify.register(require('fastify-favicon'))
// or
// example with custom path, usually relative to project root, but could be absolute
fastify.register(require('fastify-favicon'), { path: './test' })

fastify.listen(3000)
// curl http://127.0.0.1:3000/favicon.ico => returning the image, and no error thrown
```

## Requirements

Fastify 0.43.0 or later.


## License

Licensed under [Apache-2.0](./LICENSE).

----
