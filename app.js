const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    req.json({
        message:('Hello NodeJS')
    })
})

app.listen(3000)
