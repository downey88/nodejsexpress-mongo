const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    writer:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('book', booksSchema);