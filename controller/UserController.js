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
module.exports = {
    getuserData,
    postUserData
}