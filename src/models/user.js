const {Schema,model} = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        trim:true,
        required: [true, 'Provide your name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Provide your email'],
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Provide your password'],
    },
    isAdmin: {
        type: Boolean, 
        default: false
    }
});

userSchema.methods.toJSON = function(){
    const {__v,_id,...user} = this.toObject();
    user.id = _id;
    return user
}

module.exports = model('User', userSchema);