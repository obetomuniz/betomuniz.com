var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000);

// Add the route
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
});

// Start the server
server.start(function() {
  console.log("My website are running in localhost:3000.");
});
