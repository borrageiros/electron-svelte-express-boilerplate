const router = require('express').Router();
const main = require('./mainRoute/main.route');
const insertExample = require('./databaseRouteExample/insertExample.route');
const findExample = require('./databaseRouteExample/findExample.route');
const updateExample = require('./databaseRouteExample/updateExample.route');
const removeExample = require('./databaseRouteExample/removeExample.route');

// routes registration
router.use('/', main);
router.use('/insert-example', insertExample);
router.use('/find-example', findExample);
router.use('/update-example', updateExample);
router.use('/remove-example', removeExample);

module.exports = router;