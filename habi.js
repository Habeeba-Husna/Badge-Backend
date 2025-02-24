//read a file using fs module

// const fs=require('fs');
// fs.readFile('test.js','utf-8',(err,data)=>{
//     if(err){console.log("error:",err)}
//     else{console.log("success:",data)}
// })

//write a file using fs module

// const fs=require("fs")
// fs.writeFile("test.js","iam a web developer",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// })

//write date

// const fs=require("fs")
// fs.writeFile("test.js","new date:"+new Date,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

//append file

// const fs=require("fs")
// fs.appendFile("myFiless.js","javascript notes here",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

//unlink to remove

// const fs=require("fs")
// fs.unlink("hello.js",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

//rename

// const fs=require("fs")
// fs.rename("test.js","testCase.js",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

//mkdr

const fs=require("fs")
fs.mkdir("node",(err)=>{
    if(err){
        console.log(err)
    }else{

        console.log("success")
    }
})

//rmdr

// const fs=require("fs")
// fs.rmdir("node",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })
