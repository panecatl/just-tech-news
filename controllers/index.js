const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');
const commentRoutes = require('./api/comment-routes');

router.use('/api', apiRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router; 