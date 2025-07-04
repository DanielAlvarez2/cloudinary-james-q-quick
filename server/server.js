const express = require('express')
const cors = require('cors')
const app = express()
const {cloudinary} = require('./utils/cloudinary.js')
app.use(cors())
app.use(express.json({limit:'50mb'})) // allows parsing of 'body' data, i.e. req.body.data
app.use(express.urlencoded({limit:'50mb',extended:true}))
console.log('test')
console.log(process.env.CLOUDINARY_NAME)
app.post('/api/upload',async(req,res)=>{
    try{
        const fileStr = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset:'dev_setups',
        })
        console.log(uploadedResponse)
        res.json({msg:'YAYAYAYAY'})
    }catch(err){
        console.log(err)
        res.status(500).json({err:'Something went wrong'})
    }
})
app.listen(5175,()=>{
    console.log('Express Server Running: PORT 5175')
})