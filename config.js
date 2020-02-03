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
    coreApiToken: process.env.CORE_API_TOKEN || '744dbc8b819956da8d62d485220944a1fd685f27d52d520f79e60802723c591d01f6d89f891e4e4ea1ac6c63aade8f5a',
    applicationToken: process.env.APPLICATION_TOKEN || '744dbc8b819956da8d62d485220944a1fd685f27d52d520f79e60802723c591d01f6d89f891e4e4ea1ac6c63aade8f5a',
    logLevel: process.env.LOG_LEVEL || 'info',
    logDirectory: process.env.LOG_DIRECTORY || 'logs',
    database: {
        client: process.env.DATABASE_CLIENT || 'pg',
        connection: {
            database: process.env.DATABASE_NAME || 'reperio_collaboration_dev',
            host: process.env.DATABASE_HOST || 'reperio-collaboration-postgres',
            port: process.env.DATABASE_PORT || '5432',
            user: process.env.DATABASE_USER || 'reperio',
            pass: process.env.DATABASE_PASS || 'reperio',
        }
    },
    apm: {
        enabled: process.env.APM_ENABLED || false,
        serviceName: process.env.APM_SERVICE_NAME || 'reperio-collaboration-dev',
        serverUrl: process.env.APM_SERVER_URL || 'http://localhost:8200'
    },
    redis: {
        host: process.env.REDIS_URL || 'reperio-collaboration-redis',
        port: process.env.REDIS_PORT || 6379
    },
    coreRedis: {
        host: process.env.CORE_REDIS_URL || 'reperio-core-redis',
        port: process.env.CORE_REDIS_PORT || 6379
    },
    logObfuscation: {
        properties: process.env.CORE_LOG_OBFUSCATION_PROPERTIES || ['password', 'confirmPassword', 'secretKey'],
        mask: process.env.CORE_LOG_OBFUSCATION_MASK || '**********'
    },
};
