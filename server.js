const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const itemRouter = require("./routes/item.router");
const categoryRouter = require("./routes/category.router");
const singleItemRouter = require("./routes/singleitem.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const itemDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const connectDB = require("./config/dbconfig");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello Chauhan_Electrical");
});

app.use("/api/itemsdata",itemDataAddedToDBRouter)
app.use("/api/categorydata",categoryDataAddedToDBRouter);
app.use("/api/items",itemRouter);
app.use("/api/category",categoryRouter);
app.use("/api/items",singleItemRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);


mongoose.connection.once("open",()=>{
     console.log("Connected to DB");
     app.listen(process.env.PORT || PORT, () => {
          console.log("Server is up and running");
        });
        
})

