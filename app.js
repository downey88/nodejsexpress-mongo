const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 03 July 2022 19:50'
    })
})

app.listen(3000)