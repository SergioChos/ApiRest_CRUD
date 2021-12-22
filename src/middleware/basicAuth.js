const User = require('../models/user');

const authBasic = async(req,res,next) => {
    const authorization = req.header('Authorization');
    
    if(!authorization) return res.status(403).json({status: "User not authentication..."})

    const encoded = authorization.substring(6);
    const decoded = Buffer.from(encoded,'base64').toString('ascii');
    const [email,password] = decoded.split(":");
    
    const user = await User.findOne({email});

    if(email != user.email) return res.status(401).json({status: "User not exists - not authentication"});
    if(password != user.password) return res.status(401).json({status: "User not exists - not authentication"});

    req.user = user;
    next();
}

module.exports = {
    authBasic
}