const router = require('express').router();
const apiRoutes = require('./api');

router.apiRoutes('/api, apiRoutes');

router,use((req, res) => {
    res.status(404).end();
});

module.exports = routes;
