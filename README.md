# fastify-favicon

  [![NPM Version](https://img.shields.io/npm/v/fastify-favicon.svg?style=flat)](https://npmjs.org/package/fastify-favicon/)
  [![NPM Downloads](https://img.shields.io/npm/dm/fastify-favicon.svg?style=flat)](https://npmjs.org/package/fastify-favicon/)
  [![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Fastify Plugin to serve default favicon.

With this plugin, Fastify will have a route configured for `/favicon.ico` requests.


## Usage

```js
const fastify = require('fastify')()

// example without specifying options, searching favicon.ico from project root,
// otherwise returning a default favicon
fastify.register(require('fastify-favicon'))
// or
// example with custom path (usually relative to project root, but could be absolute),
// and custom name; both options are optional
fastify.register(require('fastify-favicon'), { path: './test', name: 'icon.ico' })

fastify.listen(3000)
// curl http://127.0.0.1:3000/favicon.ico => returning the image, and no error thrown
```

## Requirements

Fastify ^3.11.0 , Node.js 10.13.x or later.
Note that plugin releases 2.x are for Fastify 2.x, 3.x are for Fastify 3.x, etc.


## Sources

Source code is all inside main repo:
[fastify-favicon](https://github.com/smartiniOnGitHub/fastify-favicon).

Documentation generated from source code (library API):
[here](https://smartiniongithub.github.io/fastify-favicon/).


## Note

Nothing.


## Contributing

1. Fork it ( https://github.com/smartiniOnGitHub/fastify-favicon/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request


## License

Licensed under [Apache-2.0](./LICENSE).

----
