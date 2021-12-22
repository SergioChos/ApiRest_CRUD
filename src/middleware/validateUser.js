const res = require('express/lib/response');
const User = require('../models/user');

const existsEmail = async email => {
    const existsemail = await User.findOne({email});
    if(existsemail){
        throw new Error(`The email: ${email} exists`);
    }
}

module.exports = {
    existsEmail
    
}