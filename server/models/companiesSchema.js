import mongoose from "mongoose";

const {Schema, model} = mongoose;

const companiesSchema = new Schema({
    name:{type:String, required:true,unique:true},
    homepage_url:{type:String, required:true},
    category_code: String,
    founded_year:Number,
    email_address :{type:String, required:true},
    description:String,
    products:[
    {name:String,
        permalink:String
    }
]
})