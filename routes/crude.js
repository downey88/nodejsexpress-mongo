const express = require('express');
const router = express.Router();
const books = require('../models/books');

// stress test cpu
router.get('/stresscpu', async (req, res) =>{
    try{ 
        fibonacci(42);
        res.send('cpu test using Fibonaci');
        console.log('cpu stress testing...');
    }catch(err){
        res.statusCode(500).json({message: err.message});
    }
    
});


// get data from mongoDB
router.get('/', async (req, res) =>{
    try{ 
        const book = await books.find();
        res.json(book);
        // res.send("Testing CI/CD")
    }catch(err){
        res.statusCode(500).json({message: err.message});
    }
    
});

// insert new data to mongoDB
router.post('/', async (req, res) =>{
    const book = new books({
        title: req.body.title,
        writer: req.body.writer,
        year: req.body.year

    });    

    try{
        const newBook = await book.save();
        res.status(201).json(newBook); 
    }catch(err){
        res.statusCode(400).json({message: err.message});
    }
});

// change document on mongoDB
router.patch('/:id', getBook, async(req, res) =>{
    if(req.body.title != null){
        res.book.title = req.body.title;
    }
    if(req.body.writer != null){
        res.book.writer = req.body.writer;
    }
    if(req.body.year != null){
        res.book.year = req.body.year;
    }

    try{
        const updateBook = await res.book.save();
        res.json(updateBook);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

// delete document from mongoDB
router.delete('/:id', getBook, async (req, res) =>{
    try{
        await res.book.deleteOne();
        res.json({ message: 'Deleted Book'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

async function getBook(req, res, next) {
    let book
    try{
        book = await books.findById(req.params.id)
        if(book == null){
            return res.status(400).json({ message: 'Cannot Find Book'});
        }
    }catch(err){
        return res.status(500).json({ message: err.message});
    }

    res.book = book;
    next();
    
}

const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = router;