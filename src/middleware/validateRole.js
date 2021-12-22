const isAdminRole = (req,res,next) => {
    const {isAdmin,name} = req.user;
    
    if(!isAdmin) return res.status(401).json({status:`${name} is not an administrator`});

    next();
}

module.exports = {
    isAdminRole
}