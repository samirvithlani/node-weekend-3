const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    isActive:{
        type:Boolean,
    }

})
//model --->
//model is used to create collection
// mongoose.model('users',userSchema)
// module.exports = userSchema

module.exports = mongoose.model('users',userSchema)