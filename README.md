# fastify-favicon

  [![NPM Version](https://img.shields.io/npm/v/fastify-favicon.svg?style=flat)](https://npmjs.org/package/fastify-favicon/)
  [![NPM Downloads](https://img.shields.io/npm/dm/fastify-favicon.svg?style=flat)](https://npmjs.org/package/fastify-favicon/)
  [![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
  [![license - APACHE-2.0](https://img.shields.io/npm/l/fastify-favicon.svg)](http://opensource.org/licenses/APACHE-2.0)

Fastify Plugin to serve the favicon.

With this plugin, Fastify will have a route configured for favicon (usually `/favicon.ico`) requests.


## Usage

```js
const fastify = require('fastify')()

// example without specifying options, searching favicon.ico from project root,
// otherwise returning a default favicon
fastify.register(require('fastify-favicon'))
// or
// example with custom path (usually relative to project root, but could be absolute),
// and custom name; all options are optional
fastify.register(require('fastify-favicon'), { path: './test', name: 'icon.ico', maxAge: 3600 })

fastify.listen({ port: 3000, host: 'localhost' })
// curl http://127.0.0.1:3000/favicon.ico => returning the image, and no error thrown
```

## Requirements

Fastify ^5.0.0 , Node.js 20 LTS (20.9.0) or later.
Note that plugin releases 4.x are for Fastify 4.x, 5.x for Fastify 5.x, etc.


## Sources

Source code is all inside main repo:
[fastify-favicon](https://github.com/smartiniOnGitHub/fastify-favicon).

Documentation generated from source code (library API):
[here](https://smartiniongithub.github.io/fastify-favicon/).


## Note

The plugin exposes a GET handler on the URI `/${name}`;
Fastify default favicon is used by default, but a custom one can be used.

Plugin options:
- path (default `__dirname`) for the folder containing the icon
- name (default 'favicon.ico') for favicon file name
- maxAge (default 86400) for cache duration in seconds for the image


## Contributing

1. Fork it ( https://github.com/smartiniOnGitHub/fastify-favicon/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request


## License

Licensed under [Apache-2.0](./LICENSE).

----
