const express = require("express");
const router = express.Router();

const Item = require("../model/item.model");

router.route("/").get(async(req,res)=>{
   const itemCategory = req.query.category
     try{
      let items
      if(itemCategory){
         items = await Item.find({category:itemCategory})
      }else{
         items = await Item.find({});
      }
        
        items ? res.json(items) : res.status(404).json({message:"No data found"})
     }catch(err){
        console.log(err);
     }
})

module.exports = router;