module.exports = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    jsonSecret: process.env.CORE_JSON_SECRET || '496d7e4d-eb86-4706-843b-5ede72fad0e8',
    jwtValidTimespan: process.env.CORE_JWT_TIMESPAN || '12h',
    authCookie: {
        ttl: process.env.CORE_AUTH_COOKIE_TTL === 'null' ? null : parseInt(process.env.CORE_AUTH_COOKIE_TTL || (1000 * 60 * 60 * 12)),
        isSecure: process.env.CORE_AUTH_COOKIE_IS_SECURE === 'true' ? true : false,
        isHttpOnly: process.env.CORE_AUTH_COOKIE_IS_HTTP_ONLY === 'false' ? false : true,
        isSameSite: process.env.CORE_AUTH_COOKIE_IS_SAME_SITE || 'Lax',
        path: process.env.CORE_AUTH_COOKIE_PATH || '/',
        domain: process.env.CORE_AUTH_COOKIE_DOMAIN || 'localhost'
    },
    secret: process.env.CORE_SECRET || '6LfjumIUAAAAAI33bLW6by3Ny3QOE50YxvW_05q3',
    localTimezone: process.env.CORE_TIMEZONE || 'America/New_York',
    webAppUrl: process.env.CORE_APP_URL || 'http://localhost:8083',
    coreApiUrl: process.env.CORE_API_URL || 'http://reperio-core-app:3000/api',
    coreApiToken: process.env.CORE_API_TOKEN || '',
    applicationToken: process.env.APPLICATION_TOKEN || '',
};
