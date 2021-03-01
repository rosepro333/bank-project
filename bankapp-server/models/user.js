const mongoose=require('mongoose');
//database data define in model............
const User =mongoose.model('User',{
    accno:Number,
    name:String,
    bal:Number,
    username:String,
    password:String,
    history:[
        {
            amount:Number,
            transactionType:String
        }
    ]
})

module.exports=User;