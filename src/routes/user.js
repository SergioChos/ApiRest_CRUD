const {Router} = require('express');
const {check} = require('express-validator');
const {createUser,getUser,getUserID,updateUser,deleteUser} = require('../controllers/user');
const validateField = require('../utils/validateField');
const {existsEmail} = require('../middleware/validateUser');
const { authBasic } = require('../middleware/basicAuth');
const { isAdminRole } = require('../middleware/validateRole');

const router = Router();

router.get('/',getUser)

router.get('/:id',getUserID)

router.post('/',[
    authBasic,
    isAdminRole,
    check('name','Provide your name...').not().isEmpty(),
    check('email', 'email not valid...').isEmail(),
    check('email').custom(existsEmail),
    check('password','Provide your password...').not().isEmpty(),
    check('password', 'The password must be greater than 6 letters...').isLength(6),
    validateField
],createUser);

router.put('/:id',[
    authBasic,
    isAdminRole,
],updateUser)

router.delete('/:id',[
    authBasic,
    isAdminRole,
],deleteUser)

module.exports = router;