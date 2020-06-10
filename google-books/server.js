const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fs = require('fs');

const PORT =  process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



const db = require("./src/models/index.books");

db.mongoose.connect(`mongodb://localhost/googlebooks_db`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("sucessfully connect to MongoDB");
    
})
.catch(err => {
    console.log("connection error", err);
    process.exit();
    
});




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));