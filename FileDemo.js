const fs = require('fs');

//create file

const writeData = () =>{

fs.writeFile("demo.txt","hello world",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})
}
const readData = () =>{
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
}

const writeJson = () =>{

        const obj = {
            name:"raj",
            age:20
        }

        const jsondata = JSON.stringify(obj)
        fs.writeFile("demo.json",jsondata,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("file created")
            }
        })


}


const readJson = () =>{

    console.log("read json")
    fs.readFile("demo.json","utf-8",(err,data)=>{
        if(err){
            console.log("....")
            console.log(err)
        }
        else{
            console.log("./././././")
            console.log(data)
            jsonobj = JSON.parse(data)
            console.log(jsonobj.name)
        }
    })

}
module.exports = {writeData,readData,writeJson,readJson};