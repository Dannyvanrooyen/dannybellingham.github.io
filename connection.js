const mongoose = require('mongoose');
const url = 'mongodb+srv://Rhino11:<password>@cluster0.lzwia.mongodb.net/<dbname>?retryWrites=true&w=majority';
const dbconnect = async()=>{
    await mongoose.connect(url,{use Univied Topologies:true, use New URL parser:true});
}
module.exports = dbconnect;