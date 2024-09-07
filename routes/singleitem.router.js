const express = require("express");
const router = express.Router();

const Item = require("../model/item.model");

router.route("/:id").get(async(req,res)=>{
     try{
          const { id } = req.params;
          const item = await Item.findById(id);
          res.json(item);
     }catch(err){
        res.status(404).json({message:"No hotel found"})
     }
})



module.exports = router;