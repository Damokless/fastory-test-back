'use strict';

const Hapi = require('@hapi/hapi');
const { default: get_all_data } = require('./get/get_data');

const init = async () => {

    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/get-all-data',
        handler: async () => {
            return await get_all_data()
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
