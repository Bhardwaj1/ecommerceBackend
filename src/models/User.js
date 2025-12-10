const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true,sparse:true},
    phone:{type:String,required:true,sparse:true},
    password:{type:String,required:true,minLength:8},
    role:{type:String,enum:["customer","admin","company"]},
    googleId:{type:String},
},{
    timestamps:true
});

module.exports=mongoose.model("User",userSchema);

