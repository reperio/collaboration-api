const Joi = require('joi');
const Boom = require('boom');
const config = require('../config');
const CrossbarConnector = require('@reperio/crossbar');

// currently just a test API file
module.exports = [
    {
        method: 'GET',
        path: '/v1/',
        options: {
            auth: false,
        },
        handler: async (request, h) => {
            try {
                const logger = request.server.app.logger;
                logger.info('Standard Route Working');
                return 'Welcome to the Reperio Collaboration API';
            } catch (err) {
                logger.error(err);
                logger.error('Standard Route Failed');
                return Boom.badImplementation();
            }
        }
    },
    {
        method: 'POST',
        path: '/v1/crossbar',
        options: {
            auth: false,
        },
        handler: async (request, h) => {
            const logger = request.server.app.logger;
            logger.info('Crossbar Integration Test Route');
            try {
                const crossbar = new CrossbarConnector.Crossbar({
                    baseURL: config.crossbar.baseURL,
                    authToken: 'redis',
                    accountId: config.crossbar.accountId,
                    pvtApiKey: config.crossbar.pvtApiKey
                });
                const queryParams = {
                    filter: {
                        key: 'first_name',
                        value: 'Brian'
                    },
                }

                const response = await crossbar.userService.getUsers(); 
                // const response = await crossbar.userService.getUsers(queryParams); 
                return response.data ? response.data : response.message ? response.message : response;

                return 'success';
            } catch (err) {
                logger.error(err);
                logger.error('Crossbar Integration Test Route Failed');
                // return Boom.badImplementation();
                return err.message;
            }
        }
    }
]