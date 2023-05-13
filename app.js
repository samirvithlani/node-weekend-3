const express = require('express');
const app = express();
const PORT =  3000;
const userRoutes = require('./routes/UserRoutes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//use function is used to use middleware

app.use('/user',userRoutes);

// app.get('/test',(req,res)=>{

//     console.log('test');
//     //res.send('test');
//     //res.status(201).send('test');
//     res.status(201).json({
//         message:'test'
//     })

// })



app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})
