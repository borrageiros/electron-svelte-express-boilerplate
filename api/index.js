const router = require('express').Router();
const main = require('./mainRoute/main.route');
const databaseExample = require('./databaseRouteExample/databaseExample.route');

// routes registration
router.use('/', main);
router.use('/database-example', databaseExample);

module.exports = router;