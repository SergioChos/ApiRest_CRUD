
const User = require('../models/user');

const login = async(req,res) => {
    res.status(202).json({status: "User authenticated!"});
}

module.exports ={
    login
} 