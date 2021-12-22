const {Router} = require('express');
const { authBasic } = require('../middleware/basicAuth');
const {login} = require('../controllers/auth');
const router = Router();

router.post('/',authBasic,login);

module.exports = router;