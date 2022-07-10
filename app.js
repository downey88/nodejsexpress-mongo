const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 10 July 2022 21:42'
    })
})

app.listen(3000)