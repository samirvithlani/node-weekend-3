const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    status:{
        type:String,
        default:'active'
    }
},{timestamps:true})
module.exports = mongoose.model('category',categorySchema)
