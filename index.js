const express = require('express');
const app = express();
const User = require('https://s3.console.aws.amazon.com/s3/object/project30195748bucket?region=us-east-2&prefix=Project+2/DB/User.js');

const fs = require('fs');
const connectDB = require('https://s3.console.aws.amazon.com/s3/object/project30195748bucket?region=us-east-2&prefix=Project+2/DB/Conection.js');
connectDB();
const port = process.env.PORT ;

var file_string = "testdata";
var dataArray = ['test','data'];


// fs.readFile('stuff.txt',function read(err,data){
//     if(err) {throw err};
//     console.log(data);
//     file_string = data ;
// });
fs.readFile('https://s3.console.aws.amazon.com/s3/object/project30195748bucket?region=us-east-2&prefix=Project+2/goed.txt','utf8',(err,data)=>{
    if(err) {throw err};
    console.log(data);
    file_string = data ;
});

function splitStr(str , sepp){
    const dataArray = str.split(sepp);
 }

var doc_var ;
var tpe_var ;
var pth_var ;
var tbl_var ;
var cat_var;
var fld_var;

splitStr(file_string,",");
//var dataArray = file_string.split(",");
var i ;
for( i = 0; i < dataArray.length; i++){
    if(dataArray[i].includes(".txt") || dataArray[i].includes('.docx')){
        doc_var=dataArray[i];
    } else if(dataArray[i].includes("/")){
        pth_var = dataArray[i];
    } else if(dataArray[i].includes("textfile") || dataArray[i].includes("word document")){
        tpe_var = dataArray[i];
    } else if(dataArray[i].includes("project2")){
        tbl_var = dataArray[i];
    } else if(dataArray[i].includes("1") || dataArray[i].includes("0") || dataArray[i].includes("yes") || dataArray[i].includes("no") || dataArray[i].includes("secure") || dataArray[i].includes("insecure")){
        cat_var = dataArray[i];
    } else if(dataArray[i].includes("spredsheet") || dataArray[i].includes("store type") || dataArray[i].includes("path") || dataArray[i].includes("table") || dataArray[i].includes("field") || dataArray[i].includes("category")){
        fld_var = dataArray[i];
    } else {
        //alert('these valuse are not categorised ' + dataArray[i]);
        console.log(dataArray[i])
    }


};
