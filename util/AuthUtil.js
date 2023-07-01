const roleSchema = require("../models/RoleSchema");

// const AuthUtil = (req, res, next) => {
//     console.log(req.headers.token)
//   if (req.headers.token) {
//     if(req.headers.token === '123456'){
//         next();
//     }else{
//         res.status(401).json({ message: "Unauthorized" });
//     }
//   } else {
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };
// module.exports = AuthUtil;

const AuthUtil = (req, res, next) => {
  if (req.headers.token) {
    const token = req.headers.token;
    roleSchema.find({_id:token}).then((data)=>{
        console.log(data)
        if(data.length > 0){
            if(data[0].name === 'HR'){
                    res.status(401).json({ message: "Unauthorized role." });
            }else{
                next();
            }
        }else{
            res.status(401).json({ message: "Unauthorized" });
        }
    }).catch((err)=>{
        console.log(err)
        res.status(401).json({ message: "Unauthorized" });
    })

  } else {
    console.log('else')
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = AuthUtil;
