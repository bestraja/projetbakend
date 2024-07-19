const mongoose=require('mongoose')
const user=require("./User")

const productSchema=mongoose.Schema({
name:{type:String},
description:{type:String},
price:{type:Number},
img:{type:String},
seller:{type:mongoose.Schema.ObjectId,ref:user},
category:{type:String,enum:["pc","mobile","tablette"]},
date:{type:Date,default:Date.now}
})

const product=mongoose.model("product",productSchema)

module.exports=product