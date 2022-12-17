const mongoose = require("mongoose")
const Schema=mongoose.Schema;
const userschema= new Schema({
    Name:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    MobileNumber:{
        type:Number,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Pincode:{
        type:String,
        required:true,
    },
    createdon:{
        type:Date,
        default:new Date(),
    },
    reviews:[
        {
        review:{
            type:String,
        },
        madeon:{  
        type:Date,
        default:new Date(),
    },
        like:{
            type:Number,
            default:0,
        }
        }
    ],
    orders:[
        {
            problem:{
                type:String,
            },
        Pros:{
            type:String,
        },
        pronum:{
            type:Number,
            required:true,
        },
        }
    ]
});
const user=mongoose.model('user',userschema);
module.exports=user;