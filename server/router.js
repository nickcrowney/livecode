const KoaRouter = require('@koa/router');
const router = new KoaRouter();

const { getTopics, postTopics } = require('./controllers/controller')


router.get('/topics', getTopics);
router.post('/topics', postTopics);

module.exports = router;