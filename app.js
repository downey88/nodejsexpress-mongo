const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Backend NodeJS 11 July 2022 00:32'
    })
})

app.listen(3000)