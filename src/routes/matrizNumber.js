const {Router} = require('express');
const { authBasic } = require('../middleware/basicAuth');
const matrizNumber = require('../controllers/matrizNumber.js')
const router = Router();

router.post('/',authBasic,matrizNumber);

module.exports = router;