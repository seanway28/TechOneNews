//const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');

const router = require('express').Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

//module.exports = router;
////////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
    res.send("Hello Friend")
})

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;