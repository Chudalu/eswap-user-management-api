export default () => ({
    port: process.env.PORT || 8080,
    databaseUrl: process.env.DATABASE_URL || `postgresql:postgres:0000@localhost:5432/expatswap`,
    appName: process.env.APP_NAME || 'Expatswap User Management'
});