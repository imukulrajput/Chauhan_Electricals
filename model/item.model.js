const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {type:String,required:true},
    category: {type:String,required:true},
    image: {type:String,required:true},
    brand: {type:String,required:true},
    price: {type:Number,required:true},
    rating: {type:Number,required:true},
    warranty: {type:String,required:true},
    features: {type:Array,required:true},
    stock: {type:Number,required:true},
    isAvailable: {type:Boolean,required:true}
})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;