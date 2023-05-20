const userSchema = require('../models/UserSchema');


const getuserData = (req,res)=>{

    
    res.status(200).json({
        message:'get user data'

    })

}
const postUserData = (req,res)=>{

    console.log(req.body);
    //console.log(req.params);
    console.log(req.query);
    res.status(201).json({
        message:'post user data',
        data:req.body

    })

}

const getUserDataFromDb = (req,res)=>{


    userSchema.find().then((data)=>{

        res.status(200).json({
            message:'get user data',
            data:data
        })

    }).catch((err)=>{

        res.status(500).json({
            message:'error occured',
            error:err
        })

    })

}

const getUserByCond = (req,res)=>{


    var q = req.body.q;
    var p = req.body.p;
    
    userSchema.find({name:q}).then((data)=>{

        res.status(200).json({
            message:'get user data',
            data:data
        })

    }).catch((err)=>{

        res.status(500).json({
            message:'error occured',
            error:err
        })
    })



}

const getUserbyId = (req,res)=>{

    var id = req.params.id;
    console.log(id);
    userSchema.findById(id).then((data)=>{

        res.status(200).json({
            message:"success",
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
    getuserData,
    postUserData,
    getUserDataFromDb,
    getUserbyId,
    getUserByCond
}