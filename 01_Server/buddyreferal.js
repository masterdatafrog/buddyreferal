var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello world');
    }
});

server.route

server.start(function () {
    console.log('Hapi is listening to http://localhost:3000');
});