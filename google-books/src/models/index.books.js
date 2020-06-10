const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
        type: String,
        trim: true,
        require: true
    },

    authors: {
        type: String,
        trim: true,
    },

    description: {
        type: String,
        trim: true,
    },

    image: {
       type: Buffer,
       trim: true
    },

    link : {
        type: String,
        trim: true,
    }
});

const userBooks = mongoose.model("userBooks", booksSchema);

module.exports = userBooks;