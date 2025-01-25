'use strict';

const Hapi = require('@hapi/hapi');
const { default: get_all_data } = require('./get/get_data');

const init = async () => {

    const server = Hapi.server({
        port: 4000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });
    server.route({
        method: 'GET',
        path: '/get-all-data/{name?}',
        handler: async (request, h) => {
            return request.params.name ? get_all_data(`?search=${request.params.name}`) : get_all_data('');
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
