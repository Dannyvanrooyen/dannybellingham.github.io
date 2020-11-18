const fs = require('fs');

var file_string;

fs.readFile('goed.txt',function read(err,data){
    if(err) {throw err};
    console.log(data);
    file_string = data ;
});

var spreadsheet_var ;
var type_var ;
var path_var ;
var table_var ;
var category_var;
var field_var;

var dataArray = file_string.split(",");
var i ;

for( i = 0; i < dataArray.length; i++){
    if(dataArray[i].includes(".txt") || dataArray[i].includes('.docx')){
        spreadsheet_var=dataArray[i];
    } else if(dataArray[i].includes("/")){
        path_var = dataArray[i];
    } else if(dataArray[i].includes("textfile") || dataArray[i].inludes("word document")){
        type_var = dataArray[i];
    } else if(dataArray[i].includes("project2")){
        table_var = dataArray[i];
    } else if(dataArray[i].includes("1") || dataArray[i].includes("0") || dataArray[i].includes("yes") || dataArray[i].includes("no") || dataArray[i].includes("secure") || dataArray[i].includes("insecure")){
        category_var = dataArray[i];
    } else if(dataArray[i].includes("spredsheet") || dataArray[i].includes("store type") || dataArray[i].includes("path") || dataArray[i].includes("table") || dataArray[i].includes("field") || dataArray[i].includes("category")){
        field_var = dataArray[i];
    } else {
        alert('these valuse are nor categorised ' + dataArray[i]);
    };

};