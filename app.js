const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 19 July 2022 14:39'
    })
})

app.listen(3000)