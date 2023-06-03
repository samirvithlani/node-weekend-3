const productSchema = require('../models/ProductSchema');


exports.addProduct = (req,res)=>{

    console.log(req.body);
    const product = new productSchema(req.body);
    product.save().then((data)=>{
        res.status(200).json({
            message:'Product added successfully',
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:'Error while adding product',
            error:err
        })
    })
}
exports.getAllProducts = (req,res)=>{
    productSchema.find().populate('category').then((data)=>{
        res.status(200).json({
            message:'All products',
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:'Error while fetching products',
            error:err
        })
    })
}
