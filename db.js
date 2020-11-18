const mongoose = require('mongoose');
const data = new mongoose.Schema({
    doc:{
        type:String
    },
    Tpe:{
        type:String
    },
    Pth:{
        type:String
    },
    Tbl:{
        type:String
    },
    Cat:{
        type:String
    },
    Fld:{
        type:String
    }
}) ;

module.exports = User = mongoose.model('user',data);