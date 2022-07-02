const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Backend NodeJS 02 July 2022 21:07'
    })
})

app.listen(3000)