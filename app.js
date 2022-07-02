const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Backend NodeJS'
    })
})

app.listen(3000)