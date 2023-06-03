const userSchema = require("../models/UserSchema");

const getuserData = (req, res) => {
  res.status(200).json({
    message: "get user data",
  });
};
const postUserData = (req, res) => {
  console.log(req.body);
  //console.log(req.params);
  console.log(req.query);
  res.status(201).json({
    message: "post user data",
    data: req.body,
  });
};

const getUserDataFromDb = (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.status(200).json({
        message: "get user data",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error occured",
        error: err,
      });
    });
};

const addUser = (req, res) => {
  console.log(req.body);
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.age ||
    !req.body.isActive
  ) {
    res.status(500).json({
      message: "all fields are required",
    });
  } else if (req.body.age < 18) {
    res.status(500).json({
      message: "age should be greater than 18",
    });
  } else {
    userSchema.find({ email: req.body.email }).then((data) => {
      if (data.length > 0) {
        res.status(500).json({
          message: "email already exist",
        });
      } else {
        const user = new userSchema(req.body);
        user
          .save()
          .then((data) => {
            res.status(201).json({
              message: "user added",
              data: data,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "error occured",
              error: err,
            });
          });
      }
    });
  }
};

const getUserByCond = (req, res) => {
  var q = req.body.q;
  var p = req.body.p;

  userSchema
    .find({ name: q })
    .then((data) => {
      res.status(200).json({
        message: "get user data",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error occured",
        error: err,
      });
    });
};

const getUserbyId = (req, res) => {
  var id = req.params.id;
  console.log(id);
  userSchema
    .findById(id)
    .then((data) => {
      res.status(200).json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error occured",
        error: err,
      });
    });
};
const getUserWithRole = (req, res) => {


    userSchema.find().populate('role').then((data)=>{
        res.status(200).json({
            message:'get user with role',
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
  getUserByCond,
  addUser,
  getUserWithRole
};
