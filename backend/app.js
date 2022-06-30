const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    req.json({
        mesg:'Hello NodeJS Backend'
    })
})

app.listen(3000)
