const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors)
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.post('/api/upload',(req,res)=>{
    try{
        const fileStr = req.body.data
        console.log(fileStr)
    }catch(err){
        console.log(err)
    }
})
app.listen(5175,()=>{
    console.log('Express Server Running: PORT 5174')
})