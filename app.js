const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 02 July 2022 21:12
    })
})

app.listen(3000)