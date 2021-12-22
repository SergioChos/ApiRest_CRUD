const {Router} = require('express');
const { authBasic } = require('../middleware/basicAuth');
const balence = require('../controllers/balance')
const router = Router();

router.post('/',authBasic,balence);

module.exports = router;