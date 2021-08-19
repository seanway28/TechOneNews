//const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

const router = require('express').Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

//module.exports = router;
////////////////////////////////////////////////////////////////////


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;