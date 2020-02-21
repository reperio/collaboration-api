const CrossbarConnector = require('@reperio/crossbar');
const config = require('../config');

class CrossbarHelper {
    constructor()
}


// const crossbar = new CrossbarConnector.Crossbar({
//     baseURL: config.crossbar.baseURL,
//     authToken: 'redis',
//     accountId: config.crossbar.accountId,
//     pvtApiKey: config.crossbar.pvtApiKey
// });
module.exports = CrossbarHelper;