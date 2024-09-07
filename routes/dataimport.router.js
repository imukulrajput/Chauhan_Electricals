const express = require("express");


const Item = require("../model/item.model");
const items = require("../Data/Items");
const router = express.Router();

router.route("/").post(async (req, res) => {
    try {
       
        await Item.deleteMany(); 
        const ItemInDB = await Item.insertMany(items.data);
        res.json(ItemInDB);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Could not add data to DB" });
    }
});

module.exports = router;
