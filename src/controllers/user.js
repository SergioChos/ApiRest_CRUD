const User = require('../models/user');

const createUser = async(req,res) => {
    let {name,email,password,isAdmin} = req.body;
    
    const user = new User({name,email,password,isAdmin});

    await user.save(); 

    res.status(201).json({status:'success',user});
}

const getUser = async(req,res) =>{
    const {limitPag = 10,beginning = 0} = req.query;

    const isNumber = numero =>{
        return Number(numero)
    }

    if(!isNumber) return res.status(400).json({status: "The limit has to be a number"}); 

    const[total,users] = await Promise.all([
        User.countDocuments(),
        User.find().skip(isNumber(beginning)).limit(isNumber(limitPag))
    ])
    res.status(200).json({status:'success',total,users});
}

const getUserID = async(req,res) =>{
    const {id} = req.params;

    try {
        const dataUser = await User.findById(id);
        if(dataUser) return res.status(200).json({status:'success',dataUser});

    } catch (error) {
        res.status(403).json({status:`The id: ${id} not exists`})
    }

}

const updateUser = async (req,res) =>{
    const {id} = req.params;
    
    const user = await User.findById(id);
    if(!user) return res.status(403).json({status:`No data...`});
    
    try {
        userData = await User.findByIdAndUpdate(id, req.body);
        return res.status(201).json({status:'success',userData});

    } catch (error) {
        return res.status(403).json({status:`The id: ${id} not exists`})
    }
}

const deleteUser = async(req,res) =>{
    const {id} = req.params;

    const user = await User.findById(id);
    if(!user) return res.status(403).json({status:`No data...`});

    try {
        const userDelete = await User.findByIdAndDelete(id);
        return res.status(201).json({status:`success`,userDelete});
    } catch (error) {
        return res.status(403).json({status:`The id: ${id} not exists`})
    }
}


module.exports ={
    createUser,
    getUser,
    getUserID,
    updateUser,
    deleteUser
} 