const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require("./routes/UserRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const productRoutes = require("./routes/ProductRoutes");
const userProductRoutes = require("./routes/UserProductRoutes");

//use function is used to use middleware

app.use("/user", userRoutes);
app.use("/role", roleRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/userproduct", userProductRoutes);


// app.get('/test',(req,res)=>{

//     console.log('test');
//     //res.send('test');
//     //res.status(201).send('test');
//     res.status(201).json({
//         message:'test'
//     })

// })

var db = mongoose.connect("mongodb://127.0.0.1:27017/weekendnode3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("mongodb is connected");
}).catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
