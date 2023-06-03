const categorySchema = require('../models/CategorySchema');

const addBulkCategory = (req,res)=>{

    console.log(req.body);
    //c//onst category = new categorySchema(req.body);
    categorySchema.insertMany(req.body).then((data)=>{
        res.status(200).json({
            message:'Category added successfully',
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:'Error while adding category',
            error:err
        })
    })



}
module.exports = {
    addBulkCategory
}