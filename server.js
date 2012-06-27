var http = require('http'),
    httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
  hostnameOnly: true,
  router: {
    'mcmcneil.com': '127.0.0.1:3000',
    'blog.mcmcneil.com': '127.0.0.1:3000',
    'node-databucket.mcmcneil.com': '127.0.0.1:3001'
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(8080);
