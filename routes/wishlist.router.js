const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verifyuser");
const Wishlist = require("../model/wishlist.model");

router.route("/")
    .post(verifyUser,async(req,res)=>{
       
        const newWishlist = new Wishlist(req.body);
    
        try{
            const savedWishlist = await newWishlist.save();
            res.status(201).json(savedWishlist);  
        }catch(err){
               console.log(err);
              res.status(500).json({message:"failed to create a wishlist"})
        }
    });

router.route("/:id")
      .delete(verifyUser,async(req,res)=>{
        try{
            await Wishlist.findByIdAndDelete(req.params.id);
            res.json({ message: "item deleted from wishlist"});
        }catch(err){
          res.status(500).json({message : "could not delete item from wishlist"})
        }
    })

router.route("/")
    .get(verifyUser,async (req,res)=>{
        try{
            const wishlist = await Wishlist.find({});
             wishlist ? res.json(wishlist) : res.json({message: "No items found in wishlist"})
        }catch(err){
             res.status(500).json(err);
        }
    }
    )      

module.exports = router;    