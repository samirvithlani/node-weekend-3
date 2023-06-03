const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },
    status:{
        type:String,
        default:'active'
    }
},{timestamps:true})
module.exports = mongoose.model('product',productSchema)