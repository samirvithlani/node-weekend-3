const roleSchema = require('../models/RoleSchema')

const getRoleData = (req,res)=>{

    roleSchema.find().then((data)=>{
        res.status(200).json({
            message:'get role data',
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })

}
const addRole = (req,res)=>{

    const role = new roleSchema(req.body)
    role.save().then((data)=>{
        res.status(200).json({
            message:'role added successfully',
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })


}
module.exports = {
    addRole,
    getRoleData
}

