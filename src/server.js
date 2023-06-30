const express = require('express');
const cors = require('cors')
const app = express();
require("dotenv").config()
const path = require("path")
const fileUpload = require("express-fileupload")
const {route} = require("./routes/routes")
const bodyparser = require("body-parser")

app.use(cors({
    "access-control-allow-origin": "*"
}))
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use("/api", route)

app.use("/image", express.static("src/upload"));

app.get("/*", (_,res)=>{
    res.status(404).json({message: "Not Found"})
})
const Port = process.env.PORT || 6666;


app.listen(Port, () =>{
    console.log(`Server is running on port ${Port}`);
})
