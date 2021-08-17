//const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', useRoutes);
router.use('posts', post-routes);
router.use('/comments', commentRoutes);

//module.exports = router;
////////////////////////////////////////////////////////////////////

const router = require('express').router();
const apiRoutes = require('./api');

router.apiRoutes('/api, apiRoutes');

router,use((req, res) => {
    res.status(404).end();
});

module.exports = routes;