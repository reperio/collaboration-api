const moment = require('moment');

exports.seeds = async function(knex) {
    await knex('permissions').insert([
        {
            name: 'View',
            displayName: 'View',
            description: 'View',
            deleted: false,
            createdAt: moment.utc(),
            updatedAt: moment.utc(),
        },
    ]);
}