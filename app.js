const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Backend NodeJS'
    })
})

app.listen(3000)