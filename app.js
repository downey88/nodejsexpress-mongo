const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 04 July 2022 08:48'
    })
})

app.listen(3000)