const mongoose = require('mongoose');

// Coneccion a base de datos
const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log('DB connection successful!')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error in connection to the server...');
    }
}

module.exports ={
    dbConnection
}